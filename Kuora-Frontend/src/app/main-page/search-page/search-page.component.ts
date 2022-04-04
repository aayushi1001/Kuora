import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostSearchService} from "../../resources/post-search.service";
import {Subscription} from "rxjs";
import {Post} from "../../resources/post.model";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit ,OnDestroy{

  constructor(private route:ActivatedRoute, private postSearchService: PostSearchService) { }
  paramsSubscription: Subscription =new Subscription;
  value:string='';
  post:Post[] = [];
  ngOnInit(): void {
    this.paramsSubscription =this.route.params.subscribe((params:Params) =>{
      this.post=[];
      this.value = params['value'];
      this.postSearchService.postSession(this.value).subscribe(responseData => {
          // console.log(responseData);
          if(responseData.code===200 && responseData.message==='Post Successfully found')
          {

            if(responseData.post!=null )
            {
              let postArray:Post[]=responseData.post;
              for(let pst of postArray){
                this.post.push(new Post(pst.creator_email, pst.title, pst.tag, pst.article, pst.postid, pst.verified));
              }
            }
          }
          else{
            console.log("Post Not Found !!!");
          }
        },
        errorMessage=>{
          console.log(errorMessage);
        })




    })
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
