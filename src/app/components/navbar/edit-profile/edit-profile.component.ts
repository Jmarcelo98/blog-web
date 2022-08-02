import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { EditProfileModalComponent } from 'src/app/pages/pages/modal/edit-profile-modal/edit-profile-modal.component';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private dialog: MatDialog, private authorizationService: AuthorizationService,
    private router: Router) { }

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent,
      { disableClose: true, width: '50em' }
    )
  }

  logout() {
    this.authorizationService.logout();
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }

}
