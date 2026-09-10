import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertExaminationComponent } from './expert-examination.component';
import {LaboratoryDataComponent} from "./components/laboratory-data/laboratory-data.component";
import {TherapeuticStatusComponent} from "./components/therapeutic-status/therapeutic-status.component";

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
      // Здесь будут другие роуты для подменю
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
