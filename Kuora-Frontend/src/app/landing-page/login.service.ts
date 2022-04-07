import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

interface LoginResponseData{
    code: number;
    message: string;
    token: string;
}  

@Injectable()
export class LoginService {

    constructor(private http : HttpClient,
        private router : Router) { }

    userLogin(userData: {email: string, password: string}){
        this.http.post<LoginResponseData>(environment.url_Api + 'login', userData)
        .subscribe(responseData => {
            if(responseData.code === 200){
                this.router.navigate(['/main-page']);
            }
        })
    }
}