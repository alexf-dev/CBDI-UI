import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-examination',
  templateUrl: './expert-examination.component.html',
  styleUrls: ['./expert-examination.component.scss']
})
export class ExpertExaminationComponent {
  public menuItems = [
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.LABORATORY_DATA.TITLE',
      route: 'laboratory-data',
      active: true
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.THERAPEUTIC_STATUS.TITLE',
      route: 'therapeutic-status',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.SPECIALISTS_CONCLUSION.TITLE',
      route: 'specialists-conclusion',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.REHABILITATION_CONCLUSION.TITLE',
      route: 'rehabilitation-conclusion',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.IIN_MERGE.TITLE',
      route: 'iin-merge',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.SURGICAL_STATUS.TITLE',
      route: 'surgical-status',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.NEUROLOGICAL_STATUS.TITLE',
      route: 'neurological-status',
      active: false
    },
    {
      label: 'MAIN.EXAMINATION.EXPERT_EXAMINATION.OPHTHALMOLOGY_DATA.TITLE',
      route: 'ophthalmology-data',
      active: false
    }
  ];
}


