/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ],
};

const adv = document.querySelectorAll(".promo__adv img"),
    genrs = document.querySelectorAll(".promo__genre"),
    poster = document.querySelectorAll(".promo__bg"),
    movieRoster = document.querySelector(".promo__interactive-list");

adv.forEach((img) => {
    img.remove();
});

genrs.forEach((genre) => {
    genre.textContent = "Драма";
});

poster.forEach((bg) => {
    bg.style.backgroundImage = "url(img/bg.jpg)";
});

movieRoster.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
    movieRoster.innerHTML += `<li class="promo__interactive-item">${
        index + 1
        } ${film}
            <div class="delete"></div>
        </li>`;
});