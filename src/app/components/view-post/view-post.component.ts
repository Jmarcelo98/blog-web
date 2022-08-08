import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {

  @Input()
  post: Post

  constructor() { }

}
