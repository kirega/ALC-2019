import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.authService.getUsers().subscribe(
      results => {
        this.users = results;
      }
    );
  }
  deleteUser(id: number) {
    this.authService.deleteUsers(id).subscribe(
      results => {
        this.getUsers();
      }
    );
  }
  updateUser(id: number, name) {
    this.authService.patchUsers(id, {id , name}).subscribe(
      result => {
        this.getUsers();
      }
    );
  }
  createUser(body) {
    const id = this.users.length + 1;
    this.authService.createUser({id, name: body.name + ' copy'}).subscribe(
      results => {
        this.getUsers();
      }
    );
  }


}
