import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { UserCommentComponent } from './user-comment/user-comment.component';



@NgModule({
  declarations: [
    CommentComponent,
    UserCommentComponent
  ],
  exports: [
    CommentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
