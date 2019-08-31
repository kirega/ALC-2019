import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users;
  model: any = {};
  menu = [
    {
      path: '/dashboard',
      name: 'Dashboard'
    }
  ];
  constructor(private authService: AuthService, private router: Router) { }

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
  createUser() {
    const id = this.users.length + 1;
    console.log(this.model);
    this.authService.createUser({id, user: this.model }).subscribe(
      results => {
        this.getUsers();
        this.router.navigate(['/dashboard']);
      }
    );
  }


}
