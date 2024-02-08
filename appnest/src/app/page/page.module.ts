import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SubjectsModule } from './subjects/subjects.module';
import { MainModule } from './main/main.module';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    RouterModule,
    SubjectsModule,
    MainModule,
    SharedModule,
    SidebarModule,
    TranslateModule,
    ButtonModule,
    MenuModule
  ],
})
export class PageModule {}
