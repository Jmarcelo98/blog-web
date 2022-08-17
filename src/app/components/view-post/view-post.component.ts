import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit{

  @Input()
  post: Post

  constructor(private domSanitizer: DomSanitizer) { }

  async ngOnInit() {
    await this.getImagePosts()
  }

  async getImagePosts() {

    if (this.post.thumbnail == null) {
      this.post.thumbnail = "../../../../assets/img/default_thumb.png";
    } else {
      let objectURL = 'data:image/png;base64,' + this.post.thumbnail;
      this.post.thumbnail = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

}
