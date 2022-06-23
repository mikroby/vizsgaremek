import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface IField {
  type: string
  title: string
  name: string
  required: boolean
  validator: RegExp | string
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  // @Input() list: IField[] = []
  list: IField[] = []

  // _id: string = ''

  constructor(
    
  ) { }

  ngOnInit(): void {

  }


  onSubmit(ngForm: NgForm): void {

  }

  onCancel(): void {
    history.back()
  }

}
