import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})
export class AppComponent {
  title = 'Typescript angular app demo ';
  previousPath = '/';

  constructor(private _router: Router, private route: ActivatedRoute, private location: Location){}


  homeLink(event){
    this.setPreviousPath();
    // this.router.navigate(['']);
    // to disable reload page with href empty
    // event.preventDefault();
  }

  usersListLink(event){
    this.setPreviousPath();
    // this.router.navigate(['users']);
    // to disable reload page with href empty
    // event.preventDefault();
  }

  userDetailLink(event, userId){
    this.setPreviousPath();
    
    // this.router.navigate(['users', {outlets: { subsection: [userId]}}]);
    // or this.router.navigate(['users/' + userId]);
    // to disable reload page with href empty
    // event.preventDefault();
  }

  directLink(event, userId){
    this.setPreviousPath();    
    // this.router.navigate(['directlink', userId]);
    // or this.router.navigate(['users/' + userId]);
    // to disable reload page with href empty
    // event.preventDefault();
  }

  backLink() {
    this.setPreviousPath();
    this.location.back();    
    // to disable reload page with href empty
    event.preventDefault();
  }
  
  forwardLink() {
    this.setPreviousPath();
    this.location.forward();
    // to disable reload page with href empty
    event.preventDefault();
  }

  setPreviousPath() {
    this.previousPath = this._router.url;
  }

  getCurrentPath() {
    return this._router.url;
  }

}
