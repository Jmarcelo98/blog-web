import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/user';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { EditProfileModalComponent } from '../../modal/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.css']
})
export class UserInfosComponent implements OnInit {

  @Input()
  user: User

  @Input()
  image: any

  constructor(private authorizationService: AuthorizationService, private dialog: MatDialog) { }

  async ngOnInit() {

    console.log("user infos: " + this.user.nickname);

  }

  urlUserIsSameUserLogged(): boolean {

    if (this.user.nickname == this.authorizationService.getLoggedUser().sub) {
      return true;
    }

    return false;

  }

  async openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent,
      { disableClose: true, width: '50em' }
    )
    dialogRef.componentInstance.user = this.user
    dialogRef.componentInstance.image = this.image
  }


}
