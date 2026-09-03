import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MessageService} from "primeng/api";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FaceService} from "../../../core/service/face.service";
import {FaceDataDto} from "../../../core/model/face-data";
import {FaceDataResponseDto} from "../../../core/model/face-data-response";
import {CamundaService} from "../../../core/service/camunda.service";
import {EdsInfo} from "../../../dto/eds-info";
import {finalize} from "rxjs";
import {ReestrExpertsResponse} from "../../../dto/reestrExperts/reestr-experts-response";
import {PageResponse} from "../../../dto/page-response";
import {JournalApprovalResponseDto} from "../../../dto/journaApproval/journal-approval-response-dto";

interface SignRow {
  patient: string;
  birthDate: Date;
  purpose?: string;
  expertiseStart: Date;
  managerDecision?: string;
  createdAt: Date;
  employee: string;
  status: string;
  iin?: string;
}

@Component({
  selector: 'app-approval-log',
  templateUrl: './approval-log.component.html',
  styleUrl: './approval-log.component.css'
})
export class ApprovalLogComponent implements OnInit {
  items: SignRow[] = [];
  filteredItems: SignRow[] = [];


  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  cameraVisible = false;
  selectedRow: any = null;
  stream?: MediaStream;
  photoDataUrl: string | null = null; // data:image/jpeg;base64,...
  loading = false;
  faceData: FaceDataDto;
  faceDataResponse: FaceDataResponseDto;
  edsIndo: EdsInfo;
  edsLoading = false;

  journalApprovalResponse: JournalApprovalResponseDto[] = [];
  pageResponse!: PageResponse<JournalApprovalResponseDto>;


  statusOptions = [
    {nameKk: 'Орындалған', nameRu: "Отработаны", id: 1},
    {nameKk: 'Орындалмаған', nameRu: "Не отработаны", id: 2}
  ];

  approvalLogFilter: any = {
    iin: '',
    status: null,
    dateFrom: null,
    dateTo: null,
    pageNum: 1,
    pageSize: 10,
  };


  constructor(private messageService: MessageService,
              private camundaService: CamundaService,
              private translationService: TranslateService,
              private faceService: FaceService,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {

    window['angularComponentReference'] = {
      component: this,
      zone: this.ngZone,
      loadAngularFunction: () => {
        this.loginByEDS(window.getResXML());
      }
    };

    // демо-данные
    const demoDate = new Date(2002, 11, 9); // 09.12.2002
    this.items = Array.from({length: 14}).map((_, i) => ({
      patient: i === 0
        ? 'Нурманов Галым Шынболатович'
        : 'Ермекова Арайлым Ордалыкызы',
      birthDate: demoDate,
      purpose: '',
      expertiseStart: demoDate,
      managerDecision: '',
      createdAt: demoDate,
      employee: 'Нурманов Галым Шынболатович',
      status: 'new',
      iin: '000000000000'
    }));

    this.filteredItems = [...this.items];
  }

  search(): void {
    this.camundaService.getJournalApproval(this.approvalLogFilter).subscribe(res => {
      this.pageResponse = res;
      this.journalApprovalResponse = this.pageResponse.list;
    });
  }

  clear(): void {
    this.approvalLogFilter = {
      iin: '',
      status: null,
      dateFrom: null,
      dateTo: null,
      pageNum: 1,
      pageSize: 10,
    };

    this.search();

  }

  getCondition(conditionKk: string, conditionRu: string): string {
    if (this.translationService.currentLang === 'kk') {
      return conditionKk;
    } else {
      return conditionRu;
    }
  }

  onPageChange(event: any): void {
    this.approvalLogFilter.pageNum = event.first / event.rows + 1;
    this.approvalLogFilter.pageSize = event.rows;

    this.search();
  }

  sectionOpen: { [key: string]: boolean } = {
    'filter': true
  };


  selectSignType(row: SignRow) {
    this.selectedRow = row;
     window.callNCALayer('signArrXMLCall2');
  }


  toggleSection(sectionId: string) {
    this.sectionOpen[sectionId] = !this.sectionOpen[sectionId];
  }


  onCameraDialogShow() {
    this.startCamera();
  }

  onCameraDialogHide() {
    this.stopCamera();
    this.photoDataUrl = null;
    this.selectedRow = null;
  }

  async startCamera() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Ваш браузер не поддерживает камеру');
      }

      this.stream = await navigator.mediaDevices.getUserMedia({video: true});

      if (!this.video) {
        console.error('Video element is not available');
        return;
      }

      this.video.nativeElement.srcObject = this.stream;

    } catch (err: any) {
      console.error(err);
      this.handleCameraError(err);
    }
  }

  stopCamera() {
    this.stream?.getTracks().forEach(t => t.stop());
    this.stream = undefined;
  }

  private handleCameraError(err: any) {
    let detail = 'Не удалось получить доступ к камере';

    if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') {
      detail = 'Камера не найдена!';
    } else if (err.name === 'NotAllowedError') {
      detail = 'Доступ к камере запрещён пользователем';
    }

    this.messageService.add({
      severity: 'error',
      summary: this.translationService.instant('COMMON.ERROR'),
      detail,
    });
  }

  takePhoto() {
    if (!this.video || !this.canvas) return;

    const videoEl = this.video.nativeElement;
    const canvasEl = this.canvas.nativeElement;

    canvasEl.width = videoEl.videoWidth;
    canvasEl.height = videoEl.videoHeight;

    const ctx = canvasEl.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(videoEl, 0, 0);

    this.photoDataUrl = canvasEl.toDataURL('image/jpeg', 0.9);
  }

  retakePhoto() {
    this.photoDataUrl = null;
  }

  sendPhoto() {
    if (!this.photoDataUrl || !this.selectedRow) return;

    const base64 = this.photoDataUrl.split(',')[1];

    this.loading = true;


    this.faceService.signWithPhoto({
      msgId: this.generateDigits(),
      iin: '031230650906',
      photo: base64
    }).subscribe({
      next: response => {
        this.faceDataResponse = response;

        if (this.faceDataResponse.status === 'OK') {
          this.loading = false;

          this.selectedRow.status = 'approved';

          this.messageService.add({
            severity: 'success',
            summary: this.translationService.instant('COMMON.SUCCESS'),
            detail: 'Успешно подписано',
          });
          this.cameraVisible = false;
        } else if (this.faceDataResponse.status === 'NOT_RECOGNIZED') {
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: this.translationService.instant('COMMON.ERROR'),
            detail: 'NOT_RECOGNIZED',
          });
          this.cameraVisible = false;
        } else if (this.faceDataResponse.status === 'SERVICE_ERROR') {
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: this.translationService.instant('COMMON.ERROR'),
            detail: 'Ошибка при вызове внешнего сервиса',
          });
          this.cameraVisible = false;
        } else {
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: this.translationService.instant('COMMON.ERROR'),
            detail: 'Фото идентификация не прошло',
          });
        }


      },
      error: () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: this.translationService.instant('COMMON.ERROR'),
          detail: 'Ошибка при отправке фото',
        });
      },
    });
  }

  generateDigits() {
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += Math.floor(Math.random() * 10);
    }

    return result;
  }

  loginByEDS(resXml: string) {
    this.edsLoading = true;

    this.camundaService.saveXml({
      certificate: resXml
    })
      .pipe(
        finalize(() => {
          this.edsLoading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.edsIndo = data;

          if (this.edsIndo.iin != '031230650906') {
            this.messageService.add({
              severity: 'error',
              summary: this.translationService.instant('COMMON.ERROR'),
              detail: 'ИИН эксперта не совпадает с инн-ом эцп',
            });
          } else if (!this.edsIndo.isValid) {

            this.cameraVisible = true;

            this.messageService.add({
              severity: 'success',
              summary: this.translationService.instant('COMMON.SUCCESS'),
              detail: 'Успешно подписано. Теперь необходимо подтверждение по фото.',
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: this.translationService.instant('COMMON.ERROR'),
              detail: 'Не валидная подпись',
            });
          }
        },
        error: (err) => {
          console.error('Ошибка при отправке XML', err);
          this.messageService.add({
            severity: 'error',
            summary: this.translationService.instant('COMMON.ERROR'),
            detail: 'Ошибка при подписание данных',
          });
        }
      });
  }

}
