import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { AllExercisesComponent } from './all-exercises/all-exercises.component';
import { SubjectsContentComponent } from './subjects-content/subjects-content.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    SubjectsComponent,
    AllExercisesComponent,
    SubjectsContentComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    SharedModule,
    TranslateModule,
    ToastModule
  ],
})
export class SubjectsModule {}
