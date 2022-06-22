import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: any[] = [];

  constructor(private userSvc: UsersService) { }

  ngOnInit(): void {
    const getUsers = async() => {
      try {
        const users = await this.userSvc.getAll();
        console.log(users)
        this.userList = users;
      } catch (error) {
        console.log("Error", error);
      }
    }
    getUsers();
  }


}
