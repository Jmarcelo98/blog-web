import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FollowModalComponent } from '../../modal/follow-modal/follow-modal.component';


@Component({
  selector: 'app-followers-infos',
  templateUrl: './followers-infos.component.html',
  styleUrls: ['./followers-infos.component.css']
})

export class FollowersInfosComponent {

  constructor(private dialog: MatDialog) { }

  @Input()
  followers: number

  @Input()
  nickname: string

  openModal() {
    const dialogRef = this.dialog.open(FollowModalComponent,
      { disableClose: false, width: '25em' })
    dialogRef.componentInstance.nickname = this.nickname;
    dialogRef.componentInstance.typeFollow = "followers"
  }

}
