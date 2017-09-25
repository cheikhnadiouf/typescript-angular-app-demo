import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/catch';
import { UserModel } from "./users.model";


@Injectable()
export class UsersManager {
  constructor(private _http: HttpClient) { }

  query(): Observable<{data: UserModel[]}> {
    const url = 'http://localhost/api/users/mock-users.json';
    const params = new HttpParams().set('color', 'red');
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(url, { params })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  get(userId : string): Observable<{data: UserModel}> {
    const url = 'http://localhost/api/users/mock-user-' + userId + '.json';
    // const url = 'http://localhost/api/users/mock-user-1.json';
    const params = new HttpParams().set('color', 'red');
    // const headers = new HttpHeaders().set('Authorization', 'my-auth-token');

    return this._http.get(url, { params})
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}