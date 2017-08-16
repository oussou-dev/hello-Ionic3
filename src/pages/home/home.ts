import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  movies: any = [
    {id: 1, title: 'Terminator'},
    {id: 2, title: 'Siper Man'},
    {id: 3, title: 'Iron Man'},
    {id: 4, title: 'Flash'},
    {id: 5, title: 'X-Men'}
  ];

  constructor(public navCtrl: NavController) {
    
  }

  showMovieDetails(movie) {
    console.log(movie);
    
  }
 

}
