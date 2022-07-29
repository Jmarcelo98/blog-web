import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './navbar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NavbarComponent, EditProfileComponent, ButtonLoginComponent
  ],
  exports: [
    NavbarComponent, EditProfileComponent, ButtonLoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ]
})
export class NavbarModule { }
