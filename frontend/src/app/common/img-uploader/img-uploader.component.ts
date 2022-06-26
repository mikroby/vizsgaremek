import { HttpClient } from '@angular/common/http'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { environment } from 'src/environments/environment'

export interface IFileUploadResponse {
  success: boolean
  name: string
  path: string
}

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  fileName: string = 'Kép feltöltése (opt.:200x200px)'
  
  @Input() type: string = ''

  @Output() uploaded: EventEmitter<IFileUploadResponse> = new EventEmitter()


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const file: File | undefined = (event.target as HTMLInputElement)?.files?.[0]

    if (file) {
      this.fileName = file.name
      const formData = new FormData()
      formData.append('uploadFile', file)

      this.http.post<IFileUploadResponse>(
        `${environment.apiUrl}upload/${this.type}`,
        formData
      ).subscribe({
        next: (response: IFileUploadResponse) => {
          this.uploaded.emit(response)

          console.log(response)

        },
        error: (error: IFileUploadResponse) => {
          this.uploaded.emit(error)

          console.log(error)

        },
      })
    }
  }


}
