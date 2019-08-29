import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('married') isMarried: any;
  // tslint:disable-next-line: no-input-rename
  @Input('age') myAge: any;
  // @Input('name') name: any;

  private _name: string;
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
}
