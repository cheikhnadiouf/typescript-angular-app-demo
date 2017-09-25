import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { 
    path: 'users', 
    component: UsersListComponent,      
    children: [
      { path: ':userId', component: UserDetailComponent, outlet: 'subsection' }   
    ]
  },
  { path: 'directlink/:userId', component: UserDetailComponent, outlet: 'primary' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
