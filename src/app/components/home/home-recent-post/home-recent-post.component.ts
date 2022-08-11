import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home-recent-post',
  templateUrl: './home-recent-post.component.html',
  styleUrls: ['./home-recent-post.component.css']
})
export class HomeRecentPostComponent implements OnInit {

  constructor() { }

  @Input()
  postsRecent: Post[]

  ngOnInit(): void {
  }

}
