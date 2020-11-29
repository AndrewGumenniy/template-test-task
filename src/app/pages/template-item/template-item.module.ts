import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateItemComponent } from './template-item.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes: Routes = [
  {
    path: '', component: TemplateItemComponent,
  }
];

@NgModule({
  declarations: [TemplateItemComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class TemplateItemModule { }
