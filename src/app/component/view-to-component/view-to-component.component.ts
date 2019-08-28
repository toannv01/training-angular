import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  title = 'Event blinding';
  count = 0;
  username = 'Toan';
  name = 'toannv';
  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    // alert('hello') ;
    console.log(event.target.innerText);
  }
  onDbClick(event) {
    alert(event.target.innerText) ;
    // console.log(event.target.innerText);
  }
  onInc() {
    this.count += 1;
  }
  down() {
    this.count -= 1;
  }
  onKeyUp(event) {
    this.username = event.target.value;
  }
  onKeyUpEnter(event) {
    this.name = event.target.value;
  }
}
