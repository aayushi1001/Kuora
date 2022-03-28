import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topnav-page',
  templateUrl: './topnav-page.component.html',
  styleUrls: ['./topnav-page.component.css']
})

export class TopnavPageComponent implements OnInit {
  @Input()
  status: boolean = true;
  @Output() changeStatus: EventEmitter<boolean> =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sidebar_toggle(){
    this.status=!this.status;
    this.changeStatus.emit(this.status);
  }

}
