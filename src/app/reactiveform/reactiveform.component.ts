import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  regForm: any;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      id: [0],
      fname: ['',],
      lname: ['',],
      email: ['',],
      mobile:['7688967590' ],
    })
  }

  Register(formData:FormGroup){
    // console.log(formData)
    // console.log(this.regForm.value)
  }

}
