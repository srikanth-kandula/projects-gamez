import { Routes, RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ModalService } from "./services/model.service";
import { AuthModalComponent } from './user/auth-modal/auth-modal.component';

let routesArray : Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: AuthModalComponent },
  { path: '**', component: PageNotFoundComponent, canActivate: [ModalService]} //canActivate is a route guard
  //if no path patches to the URL, navigate to the above component
];

//set routes at root level and export them so that they can be imported in the bootstrapped module (app.module.ts)
export const routes = RouterModule.forRoot(routesArray);