import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostLockComponent } from './post-lock.component';
import { MiniaturaPostModule } from '../miniatura-post/miniatura-post.module';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';



@NgModule({
  declarations: [PostLockComponent],
  exports: [PostLockComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MiniaturaPostModule,
    ConfirmDialogModule
  ]
})
export class PostLockModule { }
