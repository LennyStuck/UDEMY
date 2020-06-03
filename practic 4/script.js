'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

            if (personalMovieDB.genres[i - 1] === '' || personalMovieDB.genres[i - 1] === null) {
                alert('Введите корректные данные');
                i--;
            }
        }

        personalMovieDB.genres.forEach(function (genre, i) {
            console.log(`Любимый жанр ${i + 1} - это ${genre}`);
        });
    }
};