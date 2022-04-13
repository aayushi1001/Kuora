import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from 'src/app/resources/login.service';

@Component({
  selector: 'app-topnav-page',
  templateUrl: './topnav-page.component.html',
  styleUrls: ['./topnav-page.component.css']
})

export class TopnavPageComponent implements OnInit {
  @Input()status: boolean = true;
  @Output() changeStatus: EventEmitter<boolean> =  new EventEmitter();
  value:string="";
  activeUserEmail: string = '';

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.activeUserEmail = this.loginService.getActiveUserDetails().email;
  }

  search(){
    this.router.navigate(['main-page/search-page/'+this.value]);
  }

  sidebar_toggle(){
    this.status=!this.status;
    this.changeStatus.emit(this.status);
  }

  getActiveUserEmail(){
    // this.activeUserEmail = this.loginService.getActiveUserDetails().email;
  }
  logout(){
    this.router.navigate(['/landing-page']);
  }
}
