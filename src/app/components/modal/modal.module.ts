import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileModalComponent } from './edit-profile-modal/edit-profile-modal.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EditProfileModalComponent
  ],
  exports: [
    EditProfileModalComponent
  ],
  imports: [
    CommonModule,
     FormsModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatDialogModule,
     MatButtonModule,
  ]
})
export class ModalModule { }
