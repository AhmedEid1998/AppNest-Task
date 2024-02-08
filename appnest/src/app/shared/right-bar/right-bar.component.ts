import { Component, EventEmitter, Output } from '@angular/core';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-right-bar',
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.scss'],
})
export class RightBarComponent {
  constructor(public langService: LangService) {}

  @Output() pageTitle = new EventEmitter<string>();

  showSidebar(title: string) {
    this.pageTitle.emit(title);
  }
}
