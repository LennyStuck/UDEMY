/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        genrs = document.querySelectorAll('.promo__genre'),
        poster = document.querySelectorAll('.promo__bg'),
        movieRoster = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('form.add'),
        inputForm = form.querySelector('.adding__input'),
        checkForm = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let inputFilm = inputForm.value;
        const love = checkForm.checked;

        if (inputFilm) {

            if (inputFilm.length > 21) {
                inputFilm = `${inputFilm.substring(0, 22)}...`;
            }

            if (love) {
                alert('Добавлен любимый фильм');
            }

            movieDB.movies.push(inputFilm);
            sortFilms(movieDB.movies);

            createMovieRoster(movieDB.movies, movieRoster);
        }

        event.target.reset();
    });

    const removeAdv = (value) => {
        value.forEach(img => {
            img.remove();
        });
    };

    const goChanges = () => {
        genrs.forEach(genre => {
            genre.textContent = 'Драма';
        });

        poster.forEach(bg => {
            bg.style.backgroundImage = 'url(img/bg.jpg)';
        });
    };

    const sortFilms = (arr) => {
        arr.sort();
    };

    function createMovieRoster(films, parent) {
        parent.innerHTML = '';
        sortFilms(films);

        films.forEach((film, index) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${index + 1}. ${film}
                    <div class="delete"></div>
                </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieRoster(films, parent);
            });
        });
    }

    goChanges();
    removeAdv(adv);
    createMovieRoster(movieDB.movies, movieRoster);

});