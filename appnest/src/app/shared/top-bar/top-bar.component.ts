import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChoiseLanguage } from 'src/app/core/interfaces/choise-language';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(
    private translate: TranslateService,
    public langService: LangService
  ) {}

  @Output() sidebarVisible = new EventEmitter<boolean>();
  @Input() pageTitle!: string;
  choiceLang: ChoiseLanguage[] = [
    {
      label: 'AR',
      command: () => {
        this.changeLanguage('ar');
      },
    },
    {
      label: 'EN',
      command: () => {
        this.changeLanguage('en');
      },
    },
  ];

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.langService.changeLanguage(lang);
  }

  showSidebar() {
    this.sidebarVisible.emit(true);
  }
}
