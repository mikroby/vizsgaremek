import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { IconModule } from '@coreui/icons-angular'
import { BadgeModule, GridModule, TooltipModule } from '@coreui/angular';

import { BaseTableComponent } from './base-table/base-table.component';
import { CardTableComponent } from './card-table/card-table.component';
import { CardComponent } from './../common/card/card.component';
import { FilterPipe } from '../pipe/filter.pipe';
import { SorterPipe } from '../pipe/sorter.pipe';
import { SpreadPipe } from '../pipe/spread.pipe';
import { DayPipe } from './../pipe/day.pipe';
import { CurrPipe } from './../pipe/curr.pipe';
import { VisiblePipe } from './../pipe/visible.pipe';


@NgModule({
  declarations: [
    BaseTableComponent,
    CardTableComponent,
    SorterPipe,
    FilterPipe,
    SpreadPipe,
    DayPipe,
    CurrPipe,
    VisiblePipe,
    CardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    IconModule,
    BadgeModule,
    GridModule,
    TooltipModule
  ],
  exports: [
    BaseTableComponent,
    CardTableComponent,
  ],
  providers: []
})
export class TableMakerModule { }
