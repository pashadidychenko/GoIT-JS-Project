import { getMoviesData } from './serviceApi';
import {
  renderFilms,
  pageNumber,
  createCardFunc,
  fragment,
  renderPopularMovies,
  chengePage,
  onNavigete,
} from './1initialHomePage';

let inputVaue = null;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');
const buttonPrev = document.getElementById('button-control-prev');
const buttonNext = document.querySelector('#button-control-next');
const errorMessage = document.getElementById('error-message');
const pageCounter = document.getElementById('page-counter');
const buttonSection = document.getElementById('button-container');

// Hide element
errorMessage.classList.add('hide');
searchForm.addEventListener('submit', pressEnter);
searchInput.addEventListener('input', getSearchText);
buttonSection.addEventListener('click', plaginationNavigation);

// add DOM element
function addHtml(fragmentHtml, rootHtml) {
  fragment.append(fragmentHtml);
  rootHtml.innerHTML = '';
  rootHtml.append(fragment);
}
addHtml(pageNumber, pageCounter);

// Get input value
function getSearchText(text) {
  inputVaue = text.target.value;
}

// Start search
function pressEnter(e) {
  e.preventDefault();
  chengePage('reset');
  searchFilms(inputVaue, pageNumber);
  addHtml(pageNumber, pageCounter);
  searchForm.reset();
}

// Search movies
function searchFilms(inputVaue, pageNumber) {
  errorMessage.classList.add('hide');
  getMoviesData(null, inputVaue, pageNumber).then(films => {
    if (films.length < 20) {
      buttonNext.classList.add('hide');
    }
    if (pageNumber === 1) {
      buttonPrev.classList.add('hide');
    }
    if (films.length === 0) {
      errorMessage.classList.remove('hide');
      buttonNext.classList.add('hide');
      buttonPrev.classList.add('hide');
      onNavigete('/search?error');
    }
    if (films.length > 20) {
      buttonNext.classList.remove('hide');
    }
    films.map(film => {
      buttonNext.classList.remove('hide');
      buttonPrev.classList.remove('hide');
      renderFilms.push(film);
      createCardFunc(film);
      fragment.append(createCardFunc(film));
    });
    const list = document.querySelector('#films-gallery');
    list.innerHTML = '';
    list.append(fragment);
    addHtml(pageNumber, pageCounter);
  });
  onNavigete(`/search?${inputVaue}/page=${pageNumber}`);
}

// Pagination
function plaginationNavigation(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  if (pageNumber === 1) {
    buttonPrev.classList.add('hide');
  }
  if (e.target.name === 'Next') {
    buttonPrev.classList.remove('hide');
    chengePage('add');
    addHtml(pageNumber, pageCounter);
    inputVaue
      ? searchFilms(inputVaue, pageNumber)
      : renderPopularMovies(pageNumber);
  }
  if (e.target.name === 'Prev') {
    if (pageNumber === 1) {
      buttonPrev.classList.add('hide');
      return;
    }
    buttonNext.classList.remove('hide');
    chengePage('remove');
    addHtml(pageNumber, pageCounter);
    inputVaue
      ? searchFilms(inputVaue, pageNumber)
      : renderPopularMovies(pageNumber);
  }
}
