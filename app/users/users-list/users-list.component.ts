import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { UsersManager } from '../users.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'ng-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  users: UserModel[] = [];
  subObservable: any;
  errorMessage: string;

  constructor(private _usersManager: UsersManager, private route: ActivatedRoute){
  }

  ngOnInit(){
      this.subObservable = this.route.params.subscribe(params => {
        // let id = Number.parseInt(params['id']);
        this._usersManager.query().subscribe(observableUsers => this.users = observableUsers.data, error =>  this.errorMessage = <any>error);
      });
  }

  ngOnDestroy(){
      this.subObservable.unsubscribe();
  }
}
