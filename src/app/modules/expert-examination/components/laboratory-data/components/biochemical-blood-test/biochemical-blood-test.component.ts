import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-biochemical-blood-test',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './biochemical-blood-test.component.html',
  styleUrls: ['./biochemical-blood-test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BiochemicalBloodTestComponent {
  public isExpanded = false; // По умолчанию свёрнут

  public toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
