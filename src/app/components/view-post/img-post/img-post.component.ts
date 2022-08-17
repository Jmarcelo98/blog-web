import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-img-post',
  templateUrl: './img-post.component.html',
  styleUrls: ['./img-post.component.css']
})
export class ImgPostComponent implements OnInit {

  constructor() { }

  @Input()
  post: Post

  ngOnInit(): void {
  }

}
