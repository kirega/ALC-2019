import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() menu = [
    {
      path: '/dashboard',
      name: 'Dashboard'
    },
    {
      path: '/signup',
      name: 'Sign Up'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
