import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('married') isMarried: any;
  @Input('age') myAge: any;


  private _name: string;
  public txtFullName: string;
  phone: number;

  @Output('txtFullName')
  onHandleFullName = new EventEmitter<any>();
  @Output('phone')
  onHandlePhone = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  @Input()
  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  onSubmitForm() {
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhone.emit(this.phone);
  }
}
