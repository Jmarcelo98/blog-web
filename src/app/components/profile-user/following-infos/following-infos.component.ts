import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FollowModalComponent } from '../../modal/follow-modal/follow-modal.component';

@Component({
  selector: 'app-following-infos',
  templateUrl: './following-infos.component.html',
  styleUrls: ['./following-infos.component.css']
})
export class FollowingInfosComponent {

  constructor(private dialog: MatDialog) { }

  @Input()
  following: number

  @Input()
  nickname: string

  openModal() {
    const dialogRef = this.dialog.open(FollowModalComponent,
      { disableClose: false, width: '25em' }
    )
    dialogRef.componentInstance.nickname = this.nickname;
    dialogRef.componentInstance.typeFollow = "following"
  }

}
