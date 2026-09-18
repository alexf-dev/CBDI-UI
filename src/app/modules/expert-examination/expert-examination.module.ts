import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";

import { ExpertExaminationRoutingModule } from './expert-examination-routing.module';

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
  ]
})
export class ExpertExaminationModule { }
