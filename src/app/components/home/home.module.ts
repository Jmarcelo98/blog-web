import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRecentPostComponent } from './home-recent-post/home-recent-post.component';
import { MiniaturaPostModule } from '../miniatura-post/miniatura-post.module';
import { UserMostFollowersComponent } from './user-most-followers/user-most-followers.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HomeRecentPostComponent, UserMostFollowersComponent],
  exports: [HomeRecentPostComponent, UserMostFollowersComponent],
  imports: [
    CommonModule,
    MiniaturaPostModule,
    MatCardModule
  ]
})
export class HomeModule { }
