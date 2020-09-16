'use strict';
import { getMoviesData, genres } from './serviceApi';
import { activeDetailsPage } from './4filmDetailsPage';

const onNavigete = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
};
const renderFilms = [];
let pageNumber = 1;

onNavigete(`/`);

const detailFilm = document.getElementById('detailFilm');
const libraryBox = document.getElementById('libraryBox');

detailFilm.classList.add('hide');
libraryBox.classList.add('hide');

const fragment = document.createDocumentFragment();
function renderPopularMovies(pageNumber) {
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
  onNavigete(`/page=${pageNumber}`);
}
renderPopularMovies(pageNumber);
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
    imgSrc = 'https://image.freepik.com/free-vector/404_175838-592.jpg';
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

function chengePage(sign) {
  if (sign === 'reset') {
    pageNumber = 1;
  }
  if (sign === 'add') {
    pageNumber = pageNumber + 1;
  }
  if (sign === 'remove') {
    pageNumber = pageNumber - 1;
  }
}

export {
  renderFilms,
  pageNumber,
  createCardFunc,
  renderPopularMovies,
  fragment,
  chengePage,
  onNavigete,
};
