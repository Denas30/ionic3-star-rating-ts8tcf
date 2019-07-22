import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  rating: number = 4;
  constructor(public navCtrl: NavController,
  public events: Events) {
     events.subscribe('star-rating:changed', (starRating) => {
       console.log(starRating);
       this.rating = starRating;
     });
  }

}