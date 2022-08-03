import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private domSanitizer: DomSanitizer) { }

  image: any

  user: User = new User();

  nickNameUrl = this.activatedRoute.snapshot.paramMap.get('nickname');

  async ngOnInit() {
    await this.getInfosUserPageUrl(this.nickNameUrl!);
  }

  async getInfosUserPageUrl(nickname: string) {

    this.userService.getInfosUserPageUrl(nickname).toPromise().then(sucesso => {

      this.user = sucesso;
      this.getImage()

    }).catch(err => {

      console.log(err);


    })

  }

  async getImage() {

    if (this.user.profilePicture == null) {
      this.image = "../../../../assets/img/default.png"
    } else {
      let objectURL = 'data:image/png;base64,' + this.user.profilePicture;
      this.image = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

}
