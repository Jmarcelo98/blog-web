import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfosComponent } from './user-infos/user-infos.component';
import { ModalModule } from '../modal/modal.module';
import { NavbarModule } from '../navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserInfosComponent
  ],
  exports: [
    UserInfosComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    NavbarModule,
    MatButtonModule
  ]
})
export class ProfileUserModule { }
