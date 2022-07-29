import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { HaveAccountComponent } from './have-account/have-account.component';

@NgModule({
  declarations: [
    FormCadastroComponent,
    HaveAccountComponent
  ],
  exports: [
    FormCadastroComponent,
    HaveAccountComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class SignUpModule { }
