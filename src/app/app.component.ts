import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToanNV';
  public isMarried = false;
  age = 19;
  users: any[] = [
    {
      id : 1,
      name : 'Nguyễn Viết Toán',
      address : 'Hà Nội',
      phone : '0355990592',
    },
    {
      id : 2,
      name : 'Nguyễn Viết Thai',
      address : 'Hà Nội',
      phone : '0355990592',
    },
    {
      id : 3,
      name : 'Nguyễn Van Long',
      address : 'Hà Nội',
      phone : '0355990592',
    },
    {
      id : 4,
      name : 'Hoàng Kim Anh',
      address : 'Dak Lăk',
      phone : '355990592',
    },
    {
      id : 5,
      name : 'Trần Phương Thảo',
      address : 'HCM',
      phone : '0355990592',
    },
  ];
  public txtFullName: string;
  phone: number;
  onGetFullName(value) {
    this.txtFullName = value;
  }
  onGetPhone(value) {
    this.phone = value;
  }
}
