import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  show = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
    // setInterval(() => {
    //   this.show = !this.show;
    //   console.log('dashboard', this.show);
    // }, 1000);
  }
  getUsers() {
    this.authService.getUsers().subscribe(
      results => {
        this.users = results;
      }
    );
  }
}
