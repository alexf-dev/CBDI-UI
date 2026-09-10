import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';

import { AdditionalMethodsComponent } from './components/additional-methods/additional-methods.component';
import { BloodTestComponent } from './components/blood-test/blood-test.component';
import { BiochemicalBloodTestComponent } from './components/biochemical-blood-test/biochemical-blood-test.component';
import { UrineTestComponent } from './components/urine-test/urine-test.component';

import { LaboratoryDataDTO } from './models/laboratory-data.models';
import { isBlockExpandedByConfig } from '../../expert-examination.config';

@Component({
  selector: 'app-laboratory-data',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonModule,
    AdditionalMethodsComponent,
    BloodTestComponent,
    BiochemicalBloodTestComponent,
    UrineTestComponent
  ],
  templateUrl: './laboratory-data.component.html',
  styleUrls: ['./laboratory-data.component.scss']
})
export class LaboratoryDataComponent {
  @ViewChild(AdditionalMethodsComponent) additionalMethodsComponent!: AdditionalMethodsComponent;
  @ViewChild(BloodTestComponent) bloodTestComponent!: BloodTestComponent;
  @ViewChild(BiochemicalBloodTestComponent) biochemicalComponent!: BiochemicalBloodTestComponent;
  @ViewChild(UrineTestComponent) urineTestComponent!: UrineTestComponent;

  /**
   * Начальное раскрытие блоков при входе в форму.
   * Логика и настройка — в expert-examination.config.ts.
   */
  public isBlockExpanded = isBlockExpandedByConfig;

  public getData(): LaboratoryDataDTO {
    return {
      additionalMethods: this.additionalMethodsComponent.getData(),
      bloodTest: this.bloodTestComponent.getData(),
      biochemicalBloodTest: this.biochemicalComponent.getData(),
      urineTest: this.urineTestComponent.getData()
    };
  }

  public setData(data: LaboratoryDataDTO): void {
    this.additionalMethodsComponent.setData(data.additionalMethods);
    this.bloodTestComponent.setData(data.bloodTest);
    this.biochemicalComponent.setData(data.biochemicalBloodTest);
    this.urineTestComponent.setData(data.urineTest);
  }

  public onSave(): void {
    console.log('LaboratoryDataDTO:', this.getData());
  }
}
