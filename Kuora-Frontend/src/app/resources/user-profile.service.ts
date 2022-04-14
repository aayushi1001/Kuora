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
                this.userDetails.pic = responseData.user[0].pic;
                this.userDetails.verified = responseData.user[0].verified;
                this.userDetails.blocked = responseData.user[0].blocked;

            });
        }
    }
}
