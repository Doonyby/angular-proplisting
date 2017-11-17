import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListingsComponent } from './component/listings/listings.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';
import { EditListingComponent } from './component/edit-listing/edit-listing.component';
import { ListingComponent } from './component/listing/listing.component';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAyWXW5n66r6LGvjLJCgTWWUZsGyDN5lp0",
    authDomain: "angular-proplisting.firebaseapp.com",
    databaseURL: "https://angular-proplisting.firebaseio.com",
    projectId: "angular-proplisting",
    storageBucket: "angular-proplisting.appspot.com",
    messagingSenderId: "184209689643"
  }
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingComponent},
  {path:'add-listing', component:AddListingComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
