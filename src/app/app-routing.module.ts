import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { HomeComponent } from './pages/pages/home/home.component';
import { SignUpComponent } from './pages/pages/sign-up/sign-up.component';
import { UserComponent } from './pages/pages/user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PostComponent } from './pages/pages/post/post.component';
import { NotFoundComponent } from './pages/pages/not-found/not-found.component';
import { NewPostComponent } from './pages/pages/new-post/new-post.component';
import { PostLockedComponent } from './pages/pages/post-lock/post-locked.component';

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
    path: 'novo-post',
    component: NewPostComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'usuario/:nickname',
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
    path: 'post-lock',
    component: PostLockedComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
