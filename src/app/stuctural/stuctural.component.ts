import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuctural',
  templateUrl: './stuctural.component.html',
  styleUrls: ['./stuctural.component.css']
})
export class StucturalComponent implements OnInit {

  title = 'Directive';
  isShow = true;
  username = 'toannv';
  isChecked = false;
  address = "ha noi";
  age = 19;
  constructor() { }

  ngOnInit() {
  }

  onToggle() {

   this.isShow = !this.isShow;
  }
  onChange(value) {
    this.isChecked = value;
  }
}
