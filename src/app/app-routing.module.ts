import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-list',
    loadChildren: () => import('./pages/template-list/template-list.module').then(m => m.TemplateListModule),
  },
  {
    path: 'template-item/:id',
    loadChildren: () => import('./pages/template-item/template-item.module').then((m) => m.TemplateItemModule),
  },
  {
    path: '**',
    redirectTo: 'template-list',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
