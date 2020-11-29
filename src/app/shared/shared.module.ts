import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { TrustHtmlPipe } from './pipes/trustHtml.pipe';

@NgModule({
  declarations: [EditPanelComponent, TrustHtmlPipe],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    EditPanelComponent,
    TrustHtmlPipe
  ]
})
export class SharedModule { }
