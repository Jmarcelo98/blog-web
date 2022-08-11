import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-miniatura-post',
  templateUrl: './miniatura-post.component.html',
  styleUrls: ['./miniatura-post.component.css']
})
export class MiniaturaPostComponent implements OnInit {

  constructor() { }

  @Input()
  posts: Post

  async ngOnInit() {
    
  }

}
