import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreatedComponent } from './post-created.component';



@NgModule({
  declarations: [PostCreatedComponent],
  exports: [PostCreatedComponent],
  imports: [
    CommonModule
  ]
})
export class PostCreatedModule { }
