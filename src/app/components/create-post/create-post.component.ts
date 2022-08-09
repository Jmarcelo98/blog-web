import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService: CategoryService) { }

  async ngOnInit() {
    await this.getAllCategories()
  }

  postForm = this.formBuilder.group({
    content: [null, [Validators.required]],
    description: [null, [Validators.required]],
    title: [null, [Validators.required]],
    thumbnail: [null, [Validators.required]],
    isPublished: [true, [Validators.required]],
    categoryForm: [null, [Validators.required]]
  })

  selectedValue: Category;

  category: Category[]

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['insertImage'], ['insertVideo'], ['undo'], ['redo'],
    ],
  };

  uploadProfilePicture(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0] as File;
      const reader = new FileReader()
      reader.onload = (e: any) => {

        const bytes = e.target.result.split('base64,')[1]
        this.postForm.controls['thumbnail'].setValue(bytes)
      }

      reader.readAsDataURL(file)

    }
  }

  criarPost() {

    console.log(this.postForm.value);


  }

  async getAllCategories() {

    this.categoryService.getAll().toPromise().then(suc => {

      this.category = suc;

    }).catch(err => {
      console.log(err);

    })

  }

}
