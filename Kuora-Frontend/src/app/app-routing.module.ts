import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './landing-page/registration-page/registration-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path : '' , redirectTo : '/landing-page' , pathMatch : 'full'},
  {path : 'landing-page' , component : LandingPageComponent, children: [
    {path : 'login' , component : LoginPageComponent},
    {path : 'registration' , component : RegistrationPageComponent}
  ]},
  {path : 'main-page' , component : MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
