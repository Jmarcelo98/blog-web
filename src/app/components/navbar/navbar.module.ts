import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';



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
    MatDialogModule,
    MatDividerModule,
    SharedModule
  ]
})
export class NavbarModule { }
