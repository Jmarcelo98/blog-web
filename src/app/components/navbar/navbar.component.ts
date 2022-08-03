import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private categoryService: CategoryService, private authGuardService: AuthGuardService,
    private authorizationService: AuthorizationService) { }

  logged: boolean;

  public categories: Category[];

  async ngOnInit() {

    await this.getAllCategories()

    await this.isTokenExpired()

  }

  async getAllCategories() {
    await this.categoryService.getAll().toPromise().then( allCategories => {
      this.categories = allCategories;
    }).catch( err => {
      console.log(err);
    })
  }

  async isTokenExpired() {

    if(!this.authorizationService.isTokenExpired()) {
      await this.isLogged();
    } else {
      this.authorizationService.logout()
    }

  }

  isLogged() { 
    this.logged = this.authGuardService.isUsuarioAuthenticated();
  }

  getPostsByCategory(id: number) {

  }

}
