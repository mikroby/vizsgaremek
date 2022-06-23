import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

export interface IField {
  key: string
  type: string
  title: string
  required: boolean
  validator: RegExp | string
  upload?: boolean
}

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})

export class FrameComponent implements OnInit {

  // list: IField[] = []

  title: string = ''
  entity: string = ''
  _id: string = ''

  editorIconSize = this.config.editorIconSize

  constructor(
    private config: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRouteData()
  }

  getRouteData() {
    this.ar.params.subscribe(
      params => {
        this.title = params['id'] ?
        `Szerkesztés - ${params['name']}` : `Új létrehozás - ${params['name']}`
        this._id = params['id']
        this.entity = params['entity']
        // this.list = [...this.config[`${this.entity}Editor`]]        
      }
    )
  }

  getData(): void {
   
  }

  onSubmit(ngForm: NgForm): void {

  }

  onCancel(): void {
    history.back()
  }

}
