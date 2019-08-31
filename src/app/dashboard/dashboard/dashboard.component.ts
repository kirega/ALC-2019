import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.authService.getUsers().subscribe(
      results => {
        this.users = results;
        console.log(this.users)
      }
    );
  }
}
