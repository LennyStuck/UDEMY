// 'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let nameLastFilms = prompt('Один из последних просмотренных фильмов?'),
        rateFilms = prompt('На сколько оцените его?');

    if (nameLastFilms != null && rateFilms != null && nameLastFilms != '' &&
        rateFilms != '' && nameLastFilms.length < 50) {
        personalMovieDB.movies[nameLastFilms] = rateFilms;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);