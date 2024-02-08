import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  {
    path: 'page',
    component: PageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./page/page.module').then((m) => m.PageModule),
      },
    ],
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
