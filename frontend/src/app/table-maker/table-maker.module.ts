import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table/base-table.component';



@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BaseTableComponent
  ]
})
export class TableMakerModule { }
