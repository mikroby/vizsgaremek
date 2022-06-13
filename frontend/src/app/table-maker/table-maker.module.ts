import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { IconModule } from '@coreui/icons-angular'
import { BadgeModule, BreadcrumbModule, GridModule, HeaderModule } from '@coreui/angular';

import { BaseTableComponent } from './base-table/base-table.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { SorterPipe } from '../pipe/sorter.pipe';
import { SpreadPipe } from '../pipe/spread.pipe';
import { DynamicPipe } from '../pipe/dynamic.pipe';


@NgModule({
  declarations: [
    BaseTableComponent,
    SorterPipe,
    FilterPipe,
    SpreadPipe,
    DynamicPipe,

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
    BaseTableComponent,
  ],
  providers:[
    SpreadPipe,
    // CurrencyPipe,
  ]
})
export class TableMakerModule { }
