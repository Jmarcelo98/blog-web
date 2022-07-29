import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private categoryService: CategoryService, private authGuardService: AuthGuardService) { }

  logged = false

  public categories: Category[];

  ngOnInit(): void {

    this.categoryService.getAll().subscribe( allCategories => {

      this.categories = allCategories;

    }, err => {

      console.log(err);
      
      
    })

    // this.isLogged();

  }

  isLogged() {
    this.logged = this.authGuardService.isUsuarioAuthenticated();
  }

  getPostsByCategory(id: number) {

  }

}
