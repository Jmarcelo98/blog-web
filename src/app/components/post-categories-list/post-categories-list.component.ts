import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-categories-list',
  templateUrl: './post-categories-list.component.html',
  styleUrls: ['./post-categories-list.component.css']
})
export class PostCategoriesComponent implements OnInit {

  @Input()
  posts: Post[]

  constructor() { }

  ngOnInit(): void {
  }

}
