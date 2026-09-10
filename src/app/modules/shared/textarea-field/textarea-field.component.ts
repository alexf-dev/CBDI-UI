import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-textarea-field',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, InputTextareaModule],
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() rows = 2;
  @Input() placeholderKey = 'MAIN.COMMON.ENTER_VALUE';

  public onValue(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
