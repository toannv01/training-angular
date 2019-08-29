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
  address = 'ha noi';
  names: string [] = [
    'TPHCM', 'ha noi'
  ];
  age = 19;
  dataServer: string [] = [
    'TPHCM', 'ha noi', 'Hạ long', 'Dak Lak'
  ];

  public products: any[] = [

  ];
  public productsServer: any [] = [
    {
      id : 1 ,
      name : 'Sam sung',
      // image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a70-didongviet_1_1.jpg'
      price : 8000,
    },
    {
      id : 2 ,
      name : 'iphonge',
      // image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a70-didongviet_1_1.jpg'
      price : 8000,
    },
    {
      id : 3 ,
      name : 'oppoo',
      // image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a70-didongviet_1_1.jpg'
      price : 8000,
    },
    {
      id : 4 ,
      name : 'oppoo 7',
      // image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a70-didongviet_1_1.jpg'
      price : 8000,
    },
    {
      id : 5 ,
      name : 'oppoo 9',
      // image : 'https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-a70-didongviet_1_1.jpg'
      price : 8000,
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  onToggle() {

   this.isShow = !this.isShow;
  }
  onChange(value) {
    this.isChecked = value;
  }
  onLoadData() {
    this.products = this.productsServer;
  }
}
