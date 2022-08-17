import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-miniatura-post',
  templateUrl: './miniatura-post.component.html',
  styleUrls: ['./miniatura-post.component.css']
})
export class MiniaturaPostComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  @Input()
  posts: Post

  async ngOnInit() {
    await this.getImagePosts()
  }

  async getImagePosts() {

    if (this.posts.thumbnail == null) {
      this.posts.thumbnail = "../../../../assets/img/default_thumb.png";
    } else {
      let objectURL = 'data:image/png;base64,' + this.posts.thumbnail;
      this.posts.thumbnail = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

}
