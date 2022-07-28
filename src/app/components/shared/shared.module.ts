import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarBlogComponent } from './avatar-blog/avatar-blog.component';



@NgModule({
  declarations: [
    AvatarBlogComponent
  ],
  exports: [
    AvatarBlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
