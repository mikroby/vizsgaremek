import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table/base-table.component';


import { IconModule } from '@coreui/icons-angular'

@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
    BaseTableComponent
  ]
})
export class TableMakerModule { }
