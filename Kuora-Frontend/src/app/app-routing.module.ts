import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './landing-page/registration-page/registration-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayAreaPageComponent } from "./main-page/display-area-page/display-area-page.component";
import { PostQuestionComponent } from './main-page/display-area-page/post-question/post-question.component';
import { ProfilePageComponent } from './main-page/profile-page/profile-page.component';
import { VerificationPortalComponent } from './main-page/verification-portal/verification-portal.component';

const routes: Routes = [
  {path : '' , redirectTo : '/landing-page' , pathMatch : 'full'},
  {path : 'landing-page' , component : LandingPageComponent, children: [
    {path : 'login' , component : LoginPageComponent},
    {path : 'registration' , component : RegistrationPageComponent}
  ]},
  {path : 'main-page' , component : MainPageComponent,
    children:[
      {path : 'display-area/:category', component: DisplayAreaPageComponent},
      {path : 'post-question', component: PostQuestionComponent},
      {path : 'profile-page/:username', component: ProfilePageComponent},
      {path : 'verification-portal', component: VerificationPortalComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
