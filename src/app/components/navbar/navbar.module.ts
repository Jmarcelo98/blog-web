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
import { ButtonNewPostComponent } from './button-new-post/button-new-post.component';

@NgModule({
  declarations: [
    NavbarComponent, ButtonProfileComponent, ButtonLoginComponent, ButtonProfileComponent, ButtonNewPostComponent
  ],
  exports: [
    NavbarComponent, ButtonProfileComponent, ButtonLoginComponent, ButtonProfileComponent, ButtonNewPostComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    SharedModule
  ]
})
export class NavbarModule { }
