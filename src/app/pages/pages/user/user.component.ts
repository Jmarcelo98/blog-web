import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, 
    private domSanitizer: DomSanitizer, private router: Router) { }

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

      if(err.status == 404) {
        this.router.navigate(['/nao-encontrado'])
      }

    })

  }

  async getImage() {

    if (this.user.profilePicture == null) {
      this.user.profilePicture = "../../../../assets/img/default.png"
    } else {
      let objectURL = 'data:image/png;base64,' + this.user.profilePicture;
      this.user.profilePicture = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
    }

  }

}
