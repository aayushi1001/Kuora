import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component'

const routes: Routes = [
  {path : '' , redirectTo : '/main-page' , pathMatch : 'full'},
  {path : 'login' , component : LoginPageComponent},
  {path : 'registration' , component : RegistrationPageComponent},
  {path : 'main-page' , component : MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
