import { ConfigService } from 'src/app/service/config.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit {

  title: string = ''
  editorIconSize = this.configService.editorIconSize

  category: Category | null = null
  textarea: string = ''
  id: string = ''

  constructor(
    private categoryService: CategoryService,
    private configService: ConfigService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params => {
      this.id = params['id']
      this.title = this.id ?
        `${params['name']} szerkesztése` : `Új ${params['name']} létrehozása`

      if (this.id) {
        this.categoryService.getOne(this.id)
          .subscribe(data => {
            this.category = data
            this.textarea = this.category.job.join(', ')
          })
      } else {
        this.category = new Category()
      }
    })

  }

  onSubmit(category: Category): void {
    category.job = this.textarea.split(',').map(item => item.trim())

    if (this.id) {
      this.categoryService.update(category).subscribe(() => history.back())
    } else{
      delete category._id
      this.categoryService.create(category).subscribe(()=> history.back())
    }

  }

  onCancel(): void {
    history.back()
  }

}
