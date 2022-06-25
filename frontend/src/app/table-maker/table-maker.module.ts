import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { IconModule } from '@coreui/icons-angular'
import { TooltipModule } from '@coreui/angular';

import { BaseTableComponent } from './base-table/base-table.component';
import { CardTableComponent } from './card-table/card-table.component';
import { CardComponent } from './card/card.component';
import { CurrPipe } from './pipe/curr.pipe';
import { DayPipe } from './pipe/day.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { JobPipe } from './pipe/job.pipe';
import { ProjectPipe } from './pipe/project.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { SpreadPipe } from './pipe/spread.pipe';
import { CustomDatePipe } from './pipe/custom-date.pipe';


@NgModule({
  declarations: [
    BaseTableComponent,
    CardTableComponent,
    SorterPipe,
    FilterPipe,
    SpreadPipe,
    DayPipe,
    JobPipe,
    CurrPipe,   
    ProjectPipe,
    CustomDatePipe,
    CardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    IconModule,    
    TooltipModule,
        
  ],
  exports: [
    BaseTableComponent,
    CardTableComponent,
  ],
  providers: []
})
export class TableMakerModule { }
