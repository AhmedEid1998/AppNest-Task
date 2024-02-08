import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsContentComponent } from './subjects-content/subjects-content.component';
import { AllExercisesComponent } from './all-exercises/all-exercises.component';

const routes: Routes = [
  { path: '', redirectTo: 'subjects-content', pathMatch: 'full' },
  { path: 'subjects-content', component: SubjectsContentComponent },
  { path: 'all-exercises', component: AllExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
