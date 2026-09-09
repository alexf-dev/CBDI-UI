import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-urine-test',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './urine-test.component.html',
  styleUrls: ['./urine-test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UrineTestComponent {
  public isExpanded = false; // По умолчанию свёрнут

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
