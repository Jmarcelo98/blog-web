import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-following-infos',
  templateUrl: './following-infos.component.html',
  styleUrls: ['./following-infos.component.css']
})
export class FollowingInfosComponent implements OnInit {

  constructor() { }

  @Input()
  following: number

  ngOnInit(): void {

    console.log(this.following);
    

  }

}
