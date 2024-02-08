import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from '../core/services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  constructor(
    private translate: TranslateService,
    public langService: LangService
  ) {}
  pageTitle: string = 'المواد الدراسية';
  sidebarVisible: boolean = false;

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.langService.changeLanguage(lang);
  }

  showSidebar(value: boolean) {
    this.sidebarVisible = value;
  }

  receiveTitle(title: string) {
    this.pageTitle = title;
  }
}
