import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersManager } from "./users.service";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[
    UsersManager
  ],
  declarations: [UsersListComponent, UserDetailComponent],
  exports: [UsersListComponent, UserDetailComponent]
})
export class UsersModule { }
