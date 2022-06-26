import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { TooltipModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { ExpertEditorComponent } from './expert-editor/expert-editor.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { InvoiceEditorComponent } from './invoice-editor/invoice-editor.component';
import { ImgUploaderComponent } from '../common/img-uploader/img-uploader.component';


@NgModule({
  declarations: [
    CategoryEditorComponent,
    UserEditorComponent,
    ExpertEditorComponent,
    OrderEditorComponent,
    InvoiceEditorComponent,    
    ImgUploaderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,

    IconModule,   
    TooltipModule
  ],
  exports: [
    ImgUploaderComponent,
  ],
})
export class EditorModule { }
