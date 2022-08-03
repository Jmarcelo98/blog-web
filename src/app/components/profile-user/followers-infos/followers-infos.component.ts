import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers-infos',
  templateUrl: './followers-infos.component.html',
  styleUrls: ['./followers-infos.component.css']
})
export class FollowersInfosComponent implements OnInit {

  constructor() { }

  @Input()
  followers: number

  ngOnInit(): void {
  }

}
