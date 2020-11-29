import { NgModule } from '@angular/core';

import { MatIconModule, MatInputModule, MatListModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: []
})
export class AppMaterialModule { }
