import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

  listings: Observable<any[]>;
  constructor(private af: AngularFirestore) { }

  getListings() {
    this.listings = this.af.list('listings');
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