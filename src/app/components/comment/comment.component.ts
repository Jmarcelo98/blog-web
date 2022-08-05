import { Component, Input, OnInit } from '@angular/core';
import { CommentClass } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input()
  comments: CommentClass[]

  ngOnInit() { 
  }

}
