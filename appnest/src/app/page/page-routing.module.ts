import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects/subjects.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'subjects', pathMatch: 'full' },
  {
    path: 'subjects',
    component: SubjectsComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./subjects/subjects.module').then((m) => m.SubjectsModule),
      },
    ],
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main/main.module').then((m) => m.MainModule),
      },
    ],
  },
  // {
  //   path: 'subjects',
  //   component: SubjectsComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./subjects/subjects.module').then((m) => m.SubjectsModule),
  //     },
  //   ],
  // },
  // {
  //   path: 'main',
  //   component: MainComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./main/main.module').then((m) => m.MainModule),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
