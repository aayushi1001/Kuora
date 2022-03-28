import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.css']
})
export class SidenavPageComponent implements OnInit {
  @Input()
  status: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
