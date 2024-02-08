import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './core/services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private renderer: Renderer2,
    private langService: LangService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.langService.currentLanguage$.subscribe((language) => {
      const dir = language == 'ar' ? 'rtl' : 'ltr';
      this.renderer.setAttribute(document.documentElement, 'dir', dir);
    });
    this.changeLanguage('ar');
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.langService.changeLanguage(lang);
  }
}
