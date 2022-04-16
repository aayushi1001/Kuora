import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

interface PostQuestionResponseData{
    code: number;
    error : string
}

@Injectable()
export class PostQuestion {

    constructor(private http : HttpClient) {}

    postQuestion(postData: any): number{
        let res: number = 0;
        console.log(postData);
        this.http.post<PostQuestionResponseData>(environment.url_Api + 'post', postData)
        .subscribe(responseData => {
            console.log(responseData);
            res = responseData.code;
        })
        return res;
    }
}