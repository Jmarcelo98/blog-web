import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpModule } from 'src/app/components/sign-up/sign-up.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileUserModule } from 'src/app/components/profile-user/profile-user.module';
import { UserComponent } from './user/user.component';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { PostComponent } from './post/post.component';
import { ViewPostModule } from 'src/app/components/view-post/view-post.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { NewPostComponent } from './new-post/new-post.component';
import { CreatePostModule } from 'src/app/components/create-post/create-post.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    PostComponent,
    NotFoundComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SignUpModule,
    SharedModule,
    ViewPostModule,
    ProfileUserModule,
    CreatePostModule,
    ModalModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class PagesModule { }
