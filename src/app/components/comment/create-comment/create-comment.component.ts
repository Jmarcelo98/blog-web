import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authorizationService: AuthorizationService) { }

  @Input()
  post: Post

  commentForm = this.formBuilder.group({});

  ngOnInit(): void {

    this.commentForm = this.formBuilder.group({
      comment: [null, [Validators.required]],
      post: [this.post, [Validators.required]],
      idUser: [this.authorizationService.getLoggedUser().sub]
    })

  }

}
