import { Component, Input, OnInit } from '@angular/core';
import { CommentClass } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input()
  post: Post

  ngOnInit() { 
  }

}
