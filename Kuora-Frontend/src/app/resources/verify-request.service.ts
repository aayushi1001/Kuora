import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,tap } from 'rxjs/operators';
import { BehaviorSubject,throwError } from "rxjs";



export interface AuthenticationResposeData{
  code: number;
  message: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class VerifyRequestService {

  constructor(private http: HttpClient) { 

  }

  ApproveRequest(verified : string , email : string){
    
    let body=[{"propName" : "verified","value":verified}];
    console.log("called");
    return this.http.post<AuthenticationResposeData>("http://localhost:3001/register_update/"+email,body).pipe(catchError(this.errorHandler),tap(responseData =>{
        console.log(responseData);
    }))

  
}

ChangeUserStatus(status : string , email : string){
    
  let body=[{"propName" : "blocked","value":status}];
  console.log("called");
  return this.http.post<AuthenticationResposeData>("http://localhost:3001/register_update/"+email,body).pipe(catchError(this.errorHandler),tap(responseData =>{
      console.log(responseData);
  }))


}




private errorHandler(errRes: HttpErrorResponse){
  console.error(errRes.error.status_message)
  return throwError(errRes);
}


}
