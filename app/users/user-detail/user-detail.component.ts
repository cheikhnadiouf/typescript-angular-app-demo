import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';

import { UsersManager } from "../users.service";
import { UserModel } from "../users.model";

@Component({
  selector: 'ng-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy{

  user: UserModel = null;
  subObservable: any;
  errorMessage: string;
  routeId: number;
  constructor(private _usersManager: UsersManager, private _route: ActivatedRoute ){
  }


  ngOnInit() {
    this.subObservable = this._route.params.subscribe( params => {
        this._usersManager.get(params['userId'].toString()).subscribe(observableUser => this.user = observableUser.data
          ,(err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
              this.errorMessage = 'An error occurred: ' + err.error.message;
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
              this.errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
            }
          }        
        );
    });
  }

  ngOnDestroy(){
      this.subObservable.unsubscribe();
  }

}
