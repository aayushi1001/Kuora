import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { userDetails } from './user-details.model';

interface UserFullDetails{
    code: number,
    message: string,
    user: userDetails[]
}

@Injectable()
export class UserProfile {
  baseImgUrl:string=environment.url_Api;
    constructor(private http : HttpClient,
        private router : Router) { }

        private userDetails: userDetails = {
            name: 'Undefined',
            email: 'Undefined',
            signupas: 'Undefined',
            bio: 'Undefined',
            verified: 'Undefined',
            blocked: false,
            pic: 'Undefined',
        };


    getUserProfileDetails(email: string){
        this.getProfileByEmail(email);
        return this.userDetails;
    }

    private getProfileByEmail(email: string) {
        if(email != 'Undefined'){
            this.http.get<UserFullDetails>(environment.url_Api + 'register_get_email/'+ email)
            .subscribe(responseData => {
                this.userDetails.name = responseData.user[0].name;
                this.userDetails.email = responseData.user[0].email;
                this.userDetails.bio = responseData.user[0].bio;
                this.userDetails.signupas = responseData.user[0].signupas;
                if(responseData.user[0].pic)
                {
                  this.userDetails.pic = this.baseImgUrl+responseData.user[0].pic;
                }
                else
                {
                  this.userDetails.pic = 'https://t4.ftcdn.net/jpg/01/07/85/89/360_F_107858989_SJogeLthvc6WZ6lP6EsuLlxIRNtsz4JH.jpg';
                }
                this.userDetails.verified = responseData.user[0].verified;
                this.userDetails.blocked = responseData.user[0].blocked;

            });
        }
    }
}
