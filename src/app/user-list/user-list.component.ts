import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  /**
   * Input
   */
  // tslint:disable-next-line: no-input-rename
  @Input('users') users: any[] = [];
  @Input('fullName') fullname: 
  constructor() { }

  ngOnInit() {
  }

}
