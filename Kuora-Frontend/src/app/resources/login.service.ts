import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { userDetails } from './user-details.model';
import jwt_decode from "jwt-decode";

interface LoginResponseData{
    code: number;
    message: string;
    token: string;
}

@Injectable()
export class LoginService {

    private activeUserDetails: userDetails = {
        name: 'Undefined',
        email: 'Undefined',
        profile: 'Undefined',
        bio: 'Undefined',
        verified: 'Undefined'
    };

    errorResponse: string = '';

    constructor(private http : HttpClient,
        private router : Router) { }

    userLogin(userData: {email: string, password: string}){
        this.http.post<LoginResponseData>(environment.url_Api + 'login', userData)
        .subscribe(responseData => {
            if(responseData.code === 200){
                this.activeUserDetails = jwt_decode(responseData.token);
                console.log(this.activeUserDetails);
                this.router.navigate(['/main-page/display-area/all']);
            } else {
                this.errorResponse = responseData.message;
            }
        })
    }

    getActiveUserDetails(){
        return this.activeUserDetails;
    }
}
