import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsibleBlockComponent } from '@shared/collapsible-block/collapsible-block.component';
import { TextInputFieldComponent } from '@shared/text-input-field/text-input-field.component';
import { TextareaFieldComponent } from '@shared/textarea-field/textarea-field.component';

import {
  EMPTY_SPECIALIST_CONCLUSION_ITEM,
  SpecialistConclusionItemDTO
} from '../../models/specialist-conclusion.models';


@Component({
  selector: 'app-specialist-block',
  standalone: true,
  imports: [
    CommonModule,
    CollapsibleBlockComponent,
    TextInputFieldComponent,
    TextareaFieldComponent
  ],
  templateUrl: './specialist-block.component.html',
  styleUrls: ['./specialist-block.component.scss']
})
export class SpecialistBlockComponent {
  public titleKey = '';

  public isExpanded = true;

  public translationPrefix = 'MAIN.EXAMINATION.EXPERT_EXAMINATION.SPECIALIST_CONCLUSION.';

  public model: SpecialistConclusionItemDTO = { ...EMPTY_SPECIALIST_CONCLUSION_ITEM };

  public getData(): SpecialistConclusionItemDTO {
    return this.model;
  }

  public setData(data: SpecialistConclusionItemDTO): void {
    this.model = data;
  }
}
