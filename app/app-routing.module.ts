import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { 
    path: '',
    children: []
  }
  /*
  // Default init
  {
    path: 'home',
    component: AppComponent
    children: []
  },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    children: []
  },
  { path: '**', 
    component: NotFoundComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
