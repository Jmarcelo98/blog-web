import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MiniaturaPostComponent } from './miniatura-post.component';


@NgModule({
  declarations: [
    MiniaturaPostComponent
  ],
  exports: [
    MiniaturaPostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MiniaturaPostModule { }
