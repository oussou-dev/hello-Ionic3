import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {MoviePage} from '../movie/movie'

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

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {} 

  showMovieDetails(movie) {
    console.log(movie);
    this.navCtrl.push(MoviePage, {movie: movie})
    
  }
 
  showAddMovie () {
     this.alertCtrl.create({
      title: 'Ajouter un film',
      message: "Veuillez saisir le titre du film à ajouter",
      inputs: [
        {
          name: 'movietitle',
          placeholder: 'Titre du film'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sauvegarder',
          handler: data => {
            console.log('Saved clicked', data);
          }
        }
      ]
    }).present();
  }

}
