import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from "./not-found.component";
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule    
  ],
  providers: [],
  // To run any components in index.html page 
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, ContainerComponent]
})
export class AppModule { }
