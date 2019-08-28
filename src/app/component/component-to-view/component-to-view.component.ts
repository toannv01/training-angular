import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  title = 'GMO-Tón';
  public name = 'Toan NVT';
  public age = 19 ;
  public isMarried = true ;

  public user: any = {
    name: 'Toan NVT',
    age: 19 ,
    isMarried: true,
  };
  public imgLink = 'https://vn-test-11.slatic.net/p/d4392b381bec1775cc52cc6f2a668279.jpg';
  textIMG = 'go to chat work';
  imgWidth = 200;
  link = 'https://www.chatwork.com/#!rid156646252' ;

  isValid = true;
  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    return `name: ${this.user.name}`;
  }
}
