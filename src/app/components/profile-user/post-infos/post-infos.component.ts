import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-infos',
  templateUrl: './post-infos.component.html',
  styleUrls: ['./post-infos.component.css']
})
export class PostInfosComponent implements OnInit {

  constructor() { }

  @Input()
  countPostsCreated: number;

  ngOnInit(): void {
  }

}
