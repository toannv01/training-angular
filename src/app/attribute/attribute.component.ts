import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  isSpecial = false;
  constructor() { }

  ngOnInit() {
  }
  onToggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
  setClasses() {
    return {
    'border-blue' : this.isSpecial,
    'cl-red' : this.isSpecial,
    'pd-10' : this.isSpecial,
    'border-violet' : !this.isSpecial
    };
  }
}
