import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childData:any

  constructor() { }
  ngOnChanges(){
    console.log("hello")
  }

  ngOnInit(): void {
  }
  


}
