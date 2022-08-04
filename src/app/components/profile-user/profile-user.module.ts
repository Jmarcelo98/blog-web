import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { ModalModule } from '../modal/modal.module';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { PostInfosComponent } from './post-infos/post-infos.component';
import { FollowersInfosComponent } from './followers-infos/followers-infos.component';
import { FollowingInfosComponent } from './following-infos/following-infos.component';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonFollowComponent } from './button-follow/button-follow.component';
import { ProfileInfosComponent } from './profile-infos/profile-infos.component';
import { MiniaturaPostModule } from '../miniatura-post/miniatura-post.module';

@NgModule({
  declarations: [
    UserInfosComponent,
    PostInfosComponent,
    FollowersInfosComponent,
    FollowingInfosComponent,
    ButtonFollowComponent,
    ProfileInfosComponent
  ],
  exports: [
    UserInfosComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    NavbarModule,
    MatButtonModule,
    MatDividerModule,
    MiniaturaPostModule
  ],
})
export class ProfileUserModule { }
