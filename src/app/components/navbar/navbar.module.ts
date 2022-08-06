import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar.component';
import { ButtonProfileComponent } from './button-profile/button-profile.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from '../create-post/create-post.component';
import { CreatePostModule } from '../create-post/create-post.module';

@NgModule({
  declarations: [
    NavbarComponent, ButtonProfileComponent, ButtonLoginComponent, ButtonProfileComponent
  ],
  exports: [
    NavbarComponent, ButtonProfileComponent, ButtonLoginComponent, ButtonProfileComponent
  ],
  imports: [
    CommonModule,
    CreatePostModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    SharedModule
  ]
})
export class NavbarModule { }
