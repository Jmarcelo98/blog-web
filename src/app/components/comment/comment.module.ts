import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CommentComponent,
    UserCommentComponent,
    CreateCommentComponent
  ],
  exports: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CommentModule { }
