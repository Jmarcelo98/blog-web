import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SignUpComponent } from './pages/pages/sign-up/sign-up.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
