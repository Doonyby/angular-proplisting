import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListingsComponent } from './component/listings/listings.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddListingComponent } from './component/add-listing/add-listing.component';
import { EditListingComponent } from './component/edit-listing/edit-listing.component';
import { ListingComponent } from './component/listing/listing.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
