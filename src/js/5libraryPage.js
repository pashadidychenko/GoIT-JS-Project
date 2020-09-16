import { getMoviesData } from './serviceApi';
import { activeDetailsPage } from './4filmDetailsPage';

const refs = {
  myLibHome: document.querySelector('#mylib-home'),
  myLibListItem: document.querySelector('.home__list-item'),
  watchedButton: document.querySelector('#watched-button'),
  queueButton: document.querySelector('#queue-button'),
  filmListLybrary: document.getElementById('filmListLybrary'),
};

const fragment = document.createDocumentFragment();
function addHtml(fragmentHtml, rootHtml) {
  fragment.append(fragmentHtml);
  rootHtml.innerHTML = '';
  rootHtml.append(fragment);
}
const list = document.querySelector('#films-gallery-lybrary');
refs.watchedButton.addEventListener('click', drawWatchedFilmList);
refs.queueButton.addEventListener('click', drawQueueFilmList);

// Greal library list
function createLibraryCardFunc({
  backdrop_path,
  title,
  id,
  vote_average,
  release_date,
}) {
  const a = document.createElement('a');
  const li = document.createElement('li');
  li.addEventListener('click', () => activeDetailsPage(id, false));
  li.className = 'card__container';
  const divTitle = document.createElement('div');
  divTitle.className = 'card__title';
  divTitle.innerHTML = `(${release_date.substring(0, 4)}) ${title}`;
  const voteRate = document.createElement('div');
  voteRate.classList.add('vote_rating');
  voteRate.innerHTML = `★ ${vote_average}`;
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

  li.append(divTitle, img, voteRate);
  a.append(li);
  list.append(a);
  return a;
}

// Show Queue
function drawQueueFilmList() {
  addHtml('', list);
  refs.filmListLybrary.classList.remove('hide');
  const watchedButton = document.querySelector('#watched-button');
  const queueButton = document.querySelector('#queue-button');
  const myLibHome = document.querySelector('#mylib-home');

  watchedButton.classList.remove('active-nav-button');
  queueButton.classList.add('active-nav-button');
  const fromLocalStorage = JSON.parse(localStorage.getItem('filmsQueue'));

  if (fromLocalStorage === null || fromLocalStorage.length === 0) {
    return myLibHome.insertAdjacentHTML(
      'beforeend',
      `<div class="no-list">
            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>
              </div>`,
    );
  } else {
    const markup = fromLocalStorage
      .map(result => {
        getMoviesData(result).then(film => createLibraryCardFunc(film));
      })
      .join('');
    myLibHome.innerHTML = '';
    myLibHome.insertAdjacentHTML('beforeend', markup);
  }
}

// Show Watched
function drawWatchedFilmList() {
  addHtml('', list);
  refs.filmListLybrary.classList.remove('hide');
  const watchedButton = document.querySelector('#watched-button');
  const queueButton = document.querySelector('#queue-button');
  const myLibHome = document.querySelector('#mylib-home');

  watchedButton.classList.remove('active-nav-button');
  queueButton.classList.add('active-nav-button');
  const fromLocalStorage = JSON.parse(localStorage.getItem('filmsWatched'));

  if (fromLocalStorage === null || fromLocalStorage.length === 0) {
    return myLibHome.insertAdjacentHTML(
      'beforeend',
      `<div class="no-list">
            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>
              </div>`,
    );
  } else {
    const markup = fromLocalStorage
      .map(result => {
        getMoviesData(result).then(film => createLibraryCardFunc(film));
      })
      .join('');
    myLibHome.innerHTML = '';
    myLibHome.insertAdjacentHTML('beforeend', markup);
  }
}
