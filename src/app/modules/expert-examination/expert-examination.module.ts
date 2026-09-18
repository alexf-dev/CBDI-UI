import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";

// Routing
import { ExpertExaminationRoutingModule } from './expert-examination-routing.module';

// Компоненты
import { ExpertExaminationComponent } from './expert-examination.component';
import { LaboratoryDataComponent } from './components/laboratory-data/laboratory-data.component';
import { TherapeuticStatusComponent } from './components/therapeutic-status/therapeutic-status.component';
import { SpecialistsConclusionComponent } from './components/specialists-conclusion/specialists-conclusion.component';
import { RehabilitationConclusionComponent } from './components/rehabilitation-conclusion/rehabilitation-conclusion.component';

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
    RehabilitationConclusionComponent
  ]
})
export class ExpertExaminationModule { }
