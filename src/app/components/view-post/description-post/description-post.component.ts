import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-description-post',
  templateUrl: './description-post.component.html',
  styleUrls: ['./description-post.component.css']
})
export class DescriptionPostComponent implements OnInit {

  constructor() { }

  @Input()
  post: Post

  ngOnInit(): void {
  }

}
