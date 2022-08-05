import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-title-post',
  templateUrl: './title-post.component.html',
  styleUrls: ['./title-post.component.css']
})
export class TitlePostComponent implements OnInit {

  constructor() { }

  @Input()
  post: Post

  ngOnInit(): void {
  }

}
