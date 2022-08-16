import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './likes.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LikesComponent],
  exports: [LikesComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class LikesModule { }
