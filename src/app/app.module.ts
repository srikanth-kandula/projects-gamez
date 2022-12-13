import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserModule } from './user/user.module'
import { routes } from './routing-class';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    UserModule,
    routes
  ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}