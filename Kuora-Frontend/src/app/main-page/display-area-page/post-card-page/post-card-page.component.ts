import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../resources/post.model";

@Component({
  selector: 'app-post-card-page',
  templateUrl: './post-card-page.component.html',
  styleUrls: ['./post-card-page.component.css']
})
export class PostCardPageComponent implements OnInit {
  @Input()
  element:Post=new Post('','','','','');
  constructor() { }

  ngOnInit(): void {
  }

}
