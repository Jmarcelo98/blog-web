import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPostComponent } from './view-post.component';
import { MatCardModule } from '@angular/material/card';
import { TitlePostComponent } from './title-post/title-post.component';
import { MatDividerModule } from '@angular/material/divider';
import { ImgPostComponent } from './img-post/img-post.component';
import { ContentPostComponent } from './content-post/content-post.component';
import { DescriptionPostComponent } from './description-post/description-post.component';
import { CommentModule } from '../comment/comment.module';



@NgModule({
  declarations: [ViewPostComponent, TitlePostComponent, ImgPostComponent, ContentPostComponent, DescriptionPostComponent],
  exports: [ViewPostComponent],
  imports: [
    CommonModule,
    CommentModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class ViewPostModule { }
