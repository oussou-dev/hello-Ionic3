import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {MoviePage} from '../movie/movie'

import {MovieModel} from '../../models/movie-model'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage implements OnInit{

  // movies: any = [
  //   {id: 1, title: 'Terminator'},
  //   {id: 2, title: 'Siper Man'},
  //   {id: 3, title: 'Iron Man'},
  //   {id: 4, title: 'Flash'},
  //   {id: 5, title: 'X-Men'}
  // ];

  movies: any [];
  movieModel: MovieModel;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {} 

  ngOnInit() {
    this.movieModel = new MovieModel();
    this.movies = this.movieModel.getMovies();
  }

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
            console.log(data);
            this.movieModel.addMovie(data.movietitle);
            this.movies = this.movieModel.getMovies();
          }
        }
      ]
    }).present();
  }

  editMovie (movie) {
    console.log('edit', movie);
    this.alertCtrl.create({
      title: 'Modifier le film',
      message: 'Saisissez le nouveau titre souhaité',
      inputs: [
        {
          name: 'movietitle'
        }
      ],
      buttons: [
        {
          text: 'annuler'
        },
        {
          text: 'mettre à jour',
          handler: data => {
            movie.title = data.movietitle;
            this.movieModel.editMovie(movie);
          }
        }
      ]
    }).present();
  }

  deleteMovie (movie) {
    console.log('delete', movie);
    this.movieModel.deleteMovie(movie);  
    this.movies = this.movieModel.getMovies();  
  }




}
