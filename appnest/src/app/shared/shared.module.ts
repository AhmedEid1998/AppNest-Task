import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuModule } from 'primeng/menu';
import { RightBarComponent } from './right-bar/right-bar.component';

@NgModule({
  declarations: [
    QuestionComponent,
    SpinnerComponent,
    TopBarComponent,
    RightBarComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    TranslateModule,
    MenuModule,
  ],
  exports: [
    QuestionComponent,
    SpinnerComponent,
    TopBarComponent,
    RightBarComponent,
  ],
})
export class SharedModule {}
