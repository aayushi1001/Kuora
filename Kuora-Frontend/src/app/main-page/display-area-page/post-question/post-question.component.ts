import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {

  postQuestionForm!: FormGroup;
  constructor() { }


  ngOnInit(): void {
    this.postQuestionForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'category': new FormControl(null, [Validators.required]),
      'question': new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){

  }

}
