import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  constructor(private formBuilder: FormBuilder) { }

  postForm = this.formBuilder.group({
    content: [null, [Validators.required]],
    description: [null, [Validators.required]],
    title: [null, [Validators.required]],
    thumbnail: [null, [Validators.required]],
    isPublished: [true, [Validators.required]]
  })

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

}
