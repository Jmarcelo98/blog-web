import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SignUpComponent } from './pages/pages/sign-up/sign-up.component';
import { UserComponent } from './pages/pages/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostComponent } from './pages/pages/post/post.component';

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
  },
  {
    path: ':nickname',
    component: UserComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: "novo-post",
    component: CreatePostComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
