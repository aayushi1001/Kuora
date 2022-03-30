import {Component, Input, OnInit} from '@angular/core';
import {PostStoreService} from "../../resources/post-store.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { Subscription } from 'rxjs';
import {Post} from "../../resources/post.model";
import {PostCallService} from "../../resources/post-call.service";

@Component({
  selector: 'app-display-area-page',
  templateUrl: './display-area-page.component.html',
  styleUrls: ['./display-area-page.component.css']
})
export class DisplayAreaPageComponent implements OnInit {
  @Input()
  status: boolean = true;
  constructor(private route:ActivatedRoute,private postCallService:PostCallService,private poststoreService:PostStoreService, private router: Router) { }

  paramsSubscription: Subscription =new Subscription;
  postsSubscription: Subscription =new Subscription;
  category:string='';
  post:Post[] = [];
  ngOnInit(): void {this.paramsSubscription =this.route.params.subscribe((params:Params) =>{
    this.post=[];
    this.category = params['category'];
    if(this.category === "all")
    {
     // this.postsSubscription= this.postCallService.postSession().subscribe(responseData => {
     //      if(responseData.code===200 && responseData.message==='Post Successfully found')
     //      {
     //        this.poststoreService.setEmpty();
     //        if(responseData.post!=null )
     //        {
     //          this.post=responseData.post;
     //        }
     //      }
     //      else{
     //        console.log("Post Not Found !!!");
     //      }
     //    },
     //    errorMessage=>{
     //      console.log(errorMessage);
     //    })
      this.post=this.poststoreService.getPosts();
    }
    // else if (this.category === "all") {
    //    this.post=this.poststoreService.getPosts();
    // }
    else {
      this.post = this.poststoreService.getPostCategory(this.category);
    }
  })



  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.postsSubscription.unsubscribe();
  }


}
