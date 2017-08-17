export class MovieModel {
   
  movies: any[] = [
      {id: 1, title: 'test1'},
      {id: 2, title: 'test2'}
  ]

  constructor () {}

  getMovies () {
      return this.movies;
  }

  addMovie(title) {
    const id = this.movies.length + 1;
    const movie = {id: id, title: title}
    // this.movies.push(movie);
    this.movies = [...this.movies, movie];
  }

  editMovie (movie) {
    const movieIndex = this.movies.findIndex(movieItem => {
        return movieItem.id === movie.id;
    });
    this.movies = [...this.movies.slice(0, movieIndex), movie, ...this.movies.slice(movieIndex + 1)];
  }


  deleteMovie (movie) {
    this.movies = this.movies.filter(movieItem => {
      return movieItem.id !== movie.id 
    })
  }

}