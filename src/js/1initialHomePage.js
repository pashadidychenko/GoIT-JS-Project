'use strict';
console.log('Home Page');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bd9145cd173b592a13a88e4a2157689a';
const renderFilms = [];
const genres = [];
const pageNumber = 1;
function fetchPopularMoviesList() {
  return fetch(
    `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
  )
    .then(res => res.json())
    .then(data => data.results)
    .then(results => {
      return results;
    });
}

const fragment = document.createDocumentFragment();

function renderPopularMovies() {
  const list = document.querySelector('#films-gallery');

  fetchPopularMoviesList().then(films => {
    films.map(film => {
      renderFilms.push(film);
      createCardFunc(film);
      fragment.append(createCardFunc(film));
    });
    list.innerHTML = '';
    list.append(fragment);
  });
}
renderPopularMovies();
function createCardFunc({ backdrop_path, title, id }) {
  const list = document.querySelector('#films-gallery');
  const a = document.createElement('a');
  const li = document.createElement('li');
  li.addEventListener('click', () => activeDetailsPage(id, false));
  li.className = 'card__container';
  const divTitle = document.createElement('div');
  divTitle.className = 'card__title';
  divTitle.innerHTML = title;

  const img = document.createElement('img');
  img.className = 'card__img';
  let imgSrc = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', title);

  li.append(divTitle, img);
  a.append(li);
  list.append(a);
  return a;
}
function fetchGenres() {
  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => data.genres)
    .then(results => {
      results.map(el => {
        genres.push(el);
      });
    });
}

fetchGenres();
console.log('renderFilms', renderFilms);
console.log('genres', genres);
