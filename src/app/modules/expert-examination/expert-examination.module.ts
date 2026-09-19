import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Routing
import { ExpertExaminationRoutingModule } from './expert-examination-routing.module';

// Сервис переводов модуля
import { ExpertExaminationI18nService } from './services/expert-examination-i18n.service';

// Компоненты
import { ExpertExaminationComponent } from './expert-examination.component';
import { LaboratoryDataComponent } from './components/laboratory-data/laboratory-data.component';
import { TherapeuticStatusComponent } from './components/therapeutic-status/therapeutic-status.component';
import { SpecialistsConclusionComponent } from './components/specialists-conclusion/specialists-conclusion.component';
import { RehabilitationConclusionComponent } from './components/rehabilitation-conclusion/rehabilitation-conclusion.component';
import { SurgicalStatusComponent } from './components/surgical-status/surgical-status.component';

@NgModule({
  declarations: [
    ExpertExaminationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ExpertExaminationRoutingModule,
    LaboratoryDataComponent,
    TherapeuticStatusComponent,
    SpecialistsConclusionComponent,
    RehabilitationConclusionComponent,
    SurgicalStatusComponent
  ],
  providers: [
    ExpertExaminationI18nService
  ]
})
export class ExpertExaminationModule {
  constructor(
    private translate: TranslateService,
    private i18nService: ExpertExaminationI18nService
  ) {
    // Загружаем переводы при входе в модуль (ленивая загрузка)
    this.i18nService.load();

    // Догружаем переводы при переключении языка
    this.translate.onLangChange.subscribe(event => {
      this.i18nService.loadLang(event.lang);
    });
  }
}
