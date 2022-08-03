import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { EditProfileModalComponent } from 'src/app/components/modal/edit-profile-modal/edit-profile-modal.component';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-button-profile',
  templateUrl: './button-profile.component.html',
  styleUrls: ['./button-profile.component.css']
})
export class ButtonProfileComponent {

  constructor(private dialog: MatDialog, private authorizationService: AuthorizationService,
    private router: Router) { }

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent,
      { disableClose: true, width: '50em' }
    )
  }

  redirectProfilePageUserLogged() {

    this.router.navigate(['/user/' + this.authorizationService.getLoggedUser().sub])
    .then(() => {
      window.location.reload();
    });
    
  }

  logout() {
    this.authorizationService.logout();
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }

}
