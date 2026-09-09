import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routing
import { ExpertExaminationRoutingModule } from './expert-examination-routing.module';

// Компоненты
import { ExpertExaminationComponent } from './expert-examination.component';
import { LaboratoryDataComponent } from './components/laboratory-data/laboratory-data.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ExpertExaminationComponent  // ← только "корневой" компонент модуля
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ExpertExaminationRoutingModule,
    LaboratoryDataComponent  // ← Standalone компонент импортируется напрямую, без declarations!
  ]
})
export class ExpertExaminationModule { }
