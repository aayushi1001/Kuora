import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../resources/post.model";
import {environment} from 'src/environments/environment'
import {PostCallService} from "../../../resources/post-call.service";
@Component({
  selector: 'app-post-card-page',
  templateUrl: './post-card-page.component.html',
  styleUrls: ['./post-card-page.component.css']
})
export class PostCardPageComponent implements OnInit {
  @Input()
  element:Post=new Post('','','','','',false);

  baseImgUrl:string=environment.url_Api;
  constructor(private postCallService: PostCallService) { }

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

}
