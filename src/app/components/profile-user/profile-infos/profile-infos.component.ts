import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.css']
})
export class ProfileInfosComponent {

  constructor(private route: Router) { }

  @Input()
  user: User

  linkExternal(link: string) {

    this.route.navigate([link])

  }

}
