import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';  // ← Добавили

// PrimeNG модули
import { ButtonModule } from 'primeng/button';

// Импортируем все блоки
import { AdditionalMethodsComponent } from './components/additional-methods/additional-methods.component';
import { BloodTestComponent } from './components/blood-test/blood-test.component';
import { BiochemicalBloodTestComponent } from './components/biochemical-blood-test/biochemical-blood-test.component';
import { UrineTestComponent } from './components/urine-test/urine-test.component';

// Модель
import { LaboratoryDataDTO } from './models/laboratory-data.models';

@Component({
  selector: 'app-laboratory-data',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,  // ← Добавили
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

  public getData(): LaboratoryDataDTO {
    return {
      additionalMethods: this.additionalMethodsComponent.getData(),
      bloodTest: this.bloodTestComponent.getData(),
      biochemicalBloodTest: {} as any,
      urineTest: {} as any
    };
  }

  public setData(data: LaboratoryDataDTO): void {
    this.additionalMethodsComponent.setData(data.additionalMethods);
    this.bloodTestComponent.setData(data.bloodTest);
  }

  public onSave(): void {
    const data = this.getData();
    console.log('LaboratoryDataDTO:', data);
  }
}
