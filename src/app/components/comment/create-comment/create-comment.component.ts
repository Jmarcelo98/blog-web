import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private commentService: CommentService) { }

  @Input()
  post: Post

  commentForm = this.formBuilder.group({});

  ngOnInit(): void {

    this.commentForm = this.formBuilder.group({
      comment: [null, [Validators.required]],
      idPost: [this.post.id, [Validators.required]],
    })

  }

  createComment() {

    this.commentForm.markAllAsTouched();

    if (this.commentForm.valid) {

      this.commentService.createComment(this.commentForm.value).toPromise().then(suc => {

        console.log("criado");
        

      }).catch(err => {
        console.log(err);
      })

    }

  }

}
