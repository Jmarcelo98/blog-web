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

@NgModule({
  declarations: [
    UserInfosComponent,
    PostInfosComponent,
    FollowersInfosComponent,
    FollowingInfosComponent
  ],
  exports: [
    UserInfosComponent,
    PostInfosComponent,
    FollowersInfosComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    NavbarModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ProfileUserModule { }
