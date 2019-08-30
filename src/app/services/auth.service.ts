import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('api/users');
  }
  deleteUsers(id: number) {
    return this.http.delete(`api/users/${id}`);
  }
  patchUsers(id: number, body: any ) {
    return this.http.put(`api/users/`, body);
  }
  createUser(body) {
    return this.http.post(`api/users`, body);
  }
}
