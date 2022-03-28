import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  status: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeStatusHandler(status: boolean): void {
    this.status= status;
  }
}
