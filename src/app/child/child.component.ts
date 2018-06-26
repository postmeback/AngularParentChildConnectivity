import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() datafromparent: string; 

  @Output() event: EventEmitter<string> = new EventEmitter();

  public goodbye = 'goodbye'; 
  
  constructor() { }

  ngOnInit() {
  }
  
  sendtoparent()
  {
this.event.emit(this.goodbye);
  }

}
