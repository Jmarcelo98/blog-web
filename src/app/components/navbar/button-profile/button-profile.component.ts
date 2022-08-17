import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { EditProfileModalComponent } from 'src/app/components/modal/edit-profile-modal/edit-profile-modal.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-button-profile',
  templateUrl: './button-profile.component.html',
  styleUrls: ['./button-profile.component.css']
})
export class ButtonProfileComponent implements OnInit{

  constructor(private dialog: MatDialog, private authorizationService: AuthorizationService,
    private router: Router, private postService: PostService) { }

  async ngOnInit() {
    await this.postLock()
  }

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  existsPostLock: boolean

  async postLock() {

    this.postService.existsPostLock().toPromise().then( suc => {

      this.existsPostLock = suc

    }).catch(err => {
      console.log(err);
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileModalComponent,
      { disableClose: true, width: '50em' }
    )
  }

  redirectProfilePageUserLogged() {

    this.router.navigate(['/usuario/' + this.authorizationService.getLoggedUser().sub])
    .then(() => {
      window.location.reload();
    });
    
  }

  redirectPostsLocks() {

    this.router.navigate(['/post-lock'])
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
