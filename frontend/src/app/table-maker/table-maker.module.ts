import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table/base-table.component';

import { IconModule } from '@coreui/icons-angular'
import { BreadcrumbModule, GridModule, HeaderModule } from '@coreui/angular';

import { FilterPipe } from '../pipe/filter.pipe';
import { SorterPipe } from '../pipe/sorter.pipe';


@NgModule({
  declarations: [
    BaseTableComponent,
    SorterPipe,
    FilterPipe,
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
