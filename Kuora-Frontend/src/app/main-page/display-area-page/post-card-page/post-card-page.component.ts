import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../resources/post.model";
import {environment} from 'src/environments/environment'
import {PostCallService} from "../../../resources/post-call.service";
import {LoginService} from "../../../resources/login.service";
@Component({
  selector: 'app-post-card-page',
  templateUrl: './post-card-page.component.html',
  styleUrls: ['./post-card-page.component.css']
})
export class PostCardPageComponent implements OnInit {
  @Input()
  element:Post=new Post('','','','','',false);

  baseImgUrl:string=environment.url_Api;
  reason:string="";
  modalId:string="#reportModal";
  constructor(private postCallService: PostCallService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.postCallService.postImg(this.element.creator_email).subscribe(responseData => {
        if(responseData.code===200 && responseData.message==='User Successfully found')
        {
          if(responseData.user!=null )
          {
            let imgUrl:string =responseData.user[0].pic;
            this.baseImgUrl+=imgUrl;

          }
        }
        else{
          console.log("Post Not Found !!!");
        }
      },
      errorMessage=>{
        console.log(errorMessage);
      })

  }

  report(ele:Post)
  {
    let reporter = this.loginService.getActiveUserDetails().email;
    this.postCallService.reportPost(ele.postid,ele.title,this.reason,reporter,ele.creator_email)
      .subscribe(responseData => {
          console.log(responseData);
          this.handleSignup(responseData.code,responseData.message);
        },
        errorMessage=>{

          console.log(errorMessage);
        })
  }
  handleSignup(code: number, message: string){
    if(code===200)
    {
      console.log(message);
    }
    else{
      console.log("Fail Report");
    }
  }

}
