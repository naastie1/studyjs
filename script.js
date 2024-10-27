"use strict";

const watchMovie = +prompt("Сколько вы фильмов уже посмотрели?", "");

const personalMovieDB = {
  count: watchMovie,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let a = prompt("Один из последних просмотренных фильмов?");
// let b = prompt("На сколько оцените его?");
// let c = prompt("Один из последних просмотренных фильмов?");
// let d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(watchMovie);
console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?");
  let b = +prompt("На сколько оцените его?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("error!");
}
