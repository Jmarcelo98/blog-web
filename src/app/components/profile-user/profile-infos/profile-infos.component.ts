import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.css']
})
export class ProfileInfosComponent {

  constructor() { }

  @Input()
  user: User
}
