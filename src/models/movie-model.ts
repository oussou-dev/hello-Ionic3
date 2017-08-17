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

}