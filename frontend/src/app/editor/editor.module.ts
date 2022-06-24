import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { BadgeModule, GridModule, TooltipModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { CategoryEditorComponent } from './category-editor/category-editor.component';


@NgModule({
  declarations: [   
    CategoryEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    IconModule,
    // BadgeModule,
    // GridModule,
    TooltipModule
  ],
  exports: [
  ],
})
export class EditorModule { }
