import { Component, Input, OnInit, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit, PipeTransform{

  constructor(private sanitizer: DomSanitizer) { }

  @Input()
  post: Post

  postInHtml: any

  ngOnInit(): void {
    this.transform(this.post.content)
  }

  transform(value: any, ...args: any[]) {
    this.postInHtml = this.sanitizer.bypassSecurityTrustHtml(value)
  }

}
