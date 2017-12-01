import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase) { }

  getListings() {
    this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

}

interface Listing{
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  bedrooms?: string;
}