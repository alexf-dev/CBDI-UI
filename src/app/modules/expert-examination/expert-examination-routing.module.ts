import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertExaminationComponent } from './expert-examination.component';
import { LaboratoryDataComponent } from './components/laboratory-data/laboratory-data.component';
import { TherapeuticStatusComponent } from './components/therapeutic-status/therapeutic-status.component';
import { SpecialistsConclusionComponent } from './components/specialists-conclusion/specialists-conclusion.component';
import { RehabilitationConclusionComponent } from './components/rehabilitation-conclusion/rehabilitation-conclusion.component';
import { SurgicalStatusComponent } from './components/surgical-status/surgical-status.component';

const routes: Routes = [
  {
    path: '',
    component: ExpertExaminationComponent,
    children: [
      {
        path: 'laboratory-data',
        component: LaboratoryDataComponent
      },
      {
        path: 'therapeutic-status',
        component: TherapeuticStatusComponent
      },
      {
        path: 'specialists-conclusion',
        component: SpecialistsConclusionComponent
      },
      {
        path: 'rehabilitation-conclusion',
        component: RehabilitationConclusionComponent
      },
      {
        path: 'surgical-status',
        component: SurgicalStatusComponent
      },
      {
        path: '',
        redirectTo: 'laboratory-data',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertExaminationRoutingModule { }
