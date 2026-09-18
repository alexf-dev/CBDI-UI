import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-check-comment-field',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, CheckboxModule, InputTextModule],
  templateUrl: './check-comment-field.component.html',
  styleUrls: ['./check-comment-field.component.scss']
})
export class CheckCommentFieldComponent {
  @Input() labelKey = '';
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() comment = '';
  @Output() commentChange = new EventEmitter<string>();
  @Input() commentPosition: 'right' | 'bottom' = 'right';

  public onCheckedChange(value: boolean): void {
    this.checked = value;
    this.checkedChange.emit(value);
  }

  public onCommentChange(value: string): void {
    this.comment = value;
    this.commentChange.emit(value);
  }
}
