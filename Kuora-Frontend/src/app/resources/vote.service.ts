import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

export interface AuthenticationResposeData{
  code: number;
  message: string;
  vote:{voter_email: string, post_id: string, rating: number}[];
}

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) {

  }
  voteSession(postid: string){
    return this.http.get<AuthenticationResposeData>(environment.url_Api+'vote_get_postid/'+postid).pipe(catchError(this.errorHandler),tap(responseData =>{
    }))
  }
  private errorHandler(errRes: HttpErrorResponse){
    console.error(errRes.error.status_message)
    return throwError(errRes);
  }
}
