import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './landing-page/login-page/login-page.component';
import { RegistrationPageComponent } from './landing-page/registration-page/registration-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidenavPageComponent } from './main-page/sidenav-page/sidenav-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopnavPageComponent } from './main-page/topnav-page/topnav-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayAreaPageComponent } from './main-page/display-area-page/display-area-page.component';
import {PostCallService} from "./resources/post-call.service";
import {PostStoreService} from "./resources/post-store.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { PostCardPageComponent } from './main-page/display-area-page/post-card-page/post-card-page.component';
import { ProfilePageComponent } from './main-page/profile-page/profile-page.component';
import { VerificationPortalComponent } from './main-page/verification-portal/verification-portal.component';
import { PostQuestionComponent } from './main-page/display-area-page/post-question/post-question.component';
import { SearchPageComponent } from './main-page/search-page/search-page.component';
import {PostSearchService} from "./resources/post-search.service";
import { LoginService } from './landing-page/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    SidenavPageComponent,
    MainPageComponent,
    LandingPageComponent,
    TopnavPageComponent,
    DisplayAreaPageComponent,
    PostCardPageComponent,
    ProfilePageComponent,
    VerificationPortalComponent,
    PostQuestionComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PostCallService,
    PostStoreService,
    PostSearchService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
