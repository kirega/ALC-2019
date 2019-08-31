import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {
  constructor() {
  }

  createDb(reqInfo?): {} | Observable<{}> | Promise<{}> {
    const users = [
      {
        id: 1, user: {
          username: 'Joseph',
          email: 'j@mail.com'
        }
      },
      {
        id: 2, user:
          {
            username: 'Jame',
            email: 'j@mail.com'
          }
      },
      {id: 3, user: {
          username: 'Jonte',
          email: 'j@mail.com'
        }},
      {id: 4, user: {
          username: 'Mary',
          email: 'm@mail.com'
        }}
    ];
    return {users};
  }
}
