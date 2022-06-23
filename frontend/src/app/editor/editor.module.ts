import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { BadgeModule, GridModule, TooltipModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { FrameComponent } from './frame/frame.component';


@NgModule({
  declarations: [
    FrameComponent
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
    FrameComponent,
  ],
})
export class EditorModule { }
