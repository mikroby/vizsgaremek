import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular'
import { BadgeModule, BreadcrumbModule, GridModule, HeaderModule } from '@coreui/angular';

import { BaseTableComponent } from './base-table/base-table.component';
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
    BadgeModule,
    // HeaderModule,
    // BreadcrumbModule,
    GridModule,
  ],
  exports: [
    BaseTableComponent
  ]
})
export class TableMakerModule { }
