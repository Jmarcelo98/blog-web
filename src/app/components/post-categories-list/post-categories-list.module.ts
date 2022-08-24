import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCategoriesComponent } from './post-categories-list.component';
import { MiniaturaPostModule } from '../miniatura-post/miniatura-post.module';


@NgModule({
  declarations: [
    PostCategoriesComponent
  ],
  exports: [
    PostCategoriesComponent
  ] ,
  imports: [
    CommonModule,
    MiniaturaPostModule
  ]
})
export class PostCategoriesListModule { }
