'use strict';
import { getMoviesData, genres } from './serviceApi';

const renderFilms = [];
let pageNumber = 5;

const fragment = document.createDocumentFragment();

function renderPopularMovies() {
  const list = document.querySelector('#films-gallery');

  getMoviesData(null, null, pageNumber).then(films => {
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
  let imgSrc;
  if (backdrop_path === null) {
    imgSrc = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJFI-u51kMLaVTPb_rwIQLsQyGLzUW7sgIyg&usqp=CAU`;
  } else {
    imgSrc = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  }

  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', title);

  li.append(divTitle, img);
  a.append(li);
  list.append(a);
  return a;
}

console.log('renderFilms', renderFilms);
console.log('genres', genres);
