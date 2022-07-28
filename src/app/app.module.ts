import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { jwtConfig } from './config/jwt-config';
import { CadastroModule } from './components/cadastro/cadastro.module';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot(jwtConfig),
    LoginModule,
    CadastroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
