import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table/base-table.component';


import { IconModule } from '@coreui/icons-angular'
import { BreadcrumbModule, GridModule, HeaderModule } from '@coreui/angular';



@NgModule({
  declarations: [
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconModule,

    HeaderModule,
    BreadcrumbModule,
    GridModule,
  ],
  exports: [
    BaseTableComponent
  ]
})
export class TableMakerModule { }
