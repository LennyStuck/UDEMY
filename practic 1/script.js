let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let nameLastFilms = prompt('Один из последних просмотренных фильмов?'),
    rateFilms = prompt('На сколько оцените его?'),
    nameLastFilms2 = prompt('Один из последних просмотренных фильмов?'),
    rateFilms2 = prompt('На сколько оцените его?');


personalMovieDB.movies[nameLastFilms] = rateFilms;
personalMovieDB.movies[nameLastFilms2] = rateFilms2;


console.log(personalMovieDB);