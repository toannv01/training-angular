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
      address : 'Hà Nội'
    },
    {
      id : 2,
      name : 'Nguyễn Viết Thai',
      address : 'Hà Nội'
    },
    {
      id : 3,
      name : 'Nguyễn Van Long',
      address : 'Hà Nội'
    },
    {
      id : 4,
      name : 'Hoàng Kim Anh',
      address : 'Dak Lăk'
    },
    {
      id : 5,
      name : 'Trần Phương Thảo',
      address : 'HCM'
    },
  ];
}
