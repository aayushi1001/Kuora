import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  isEditableMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  editableMode(){
    this.isEditableMode = true;
  }

  onSubmit(){
    this.isEditableMode = false;
  }

}
