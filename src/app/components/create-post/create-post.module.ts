import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CreatePostComponent],
  exports: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CreatePostModule { }
