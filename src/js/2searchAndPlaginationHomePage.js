import { getMoviesData } from './serviceApi';
import { renderFilms, pageNumber, createCardFunc, fragment, renderPopularMovies } from './1initialHomePage';

let inputVaue =null;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');
const buttonPrev = document.getElementById('button-control-prev');
const buttonNext = document.querySelector('#button-control-next');
const errorMessage = document.getElementById('error-message');
const pageCounter = document.getElementById('page-counter');
const buttonSection = document.getElementById('button-container');

errorMessage.hidden = true;
searchForm.addEventListener('submit', searchFilms);
searchInput.addEventListener('input', getSearchText);
buttonSection.addEventListener('click', chengeList);
// buttonPrev.addEventListener('click', () => {});
// buttonNext.addEventListener('click', onLoadMore );  

function addHtml(fragmentHtml, rootHtml) {
    fragment.append(fragmentHtml);
    rootHtml.innerHTML = '';
    rootHtml.append(fragment);
};

addHtml(pageNumber, pageCounter);

function getSearchText(text) {
    inputVaue = text.target.value;
};

function searchFilms(e) {
    e.preventDefault();
    searchForm.reset();
    errorMessage.hidden = true;
    getMoviesData(null, inputVaue, pageNumber).then(films => {
        if (films.length < 20) {
            buttonNext.hidden = true;
            buttonPrev.hidden = true;
            }
        if (films.length === 0) {
        errorMessage.hidden = false;
        buttonNext.hidden = true;
        buttonPrev.hidden = true;
        }        
        films.map(film => {
            renderFilms.push(film);
            createCardFunc(film);
            fragment.append(createCardFunc(film));
        });
    const list = document.querySelector('#films-gallery');
    list.innerHTML = '';
    list.append(fragment);
    addHtml(pageNumber, pageCounter);
    })
};

function chengeList(e) {
    if (e.target === e.currentTarget) {
      return;
    }
    if (e.target.name === 'Next') {
      buttonPrev.hidden = false;
      pageNumber = pageNumber + 1;
      renderPopularMovies(inputVaue, pageNumber);
      addHtml(pageNumber, pageCounter);
    }
    if (e.target.name === 'Prev') {
      if (pageNumber === 1) {
        buttonPrev.hidden = true;
        return;
      }
      buttonNext.hidden = false;
      pageNumber = pageNumber - 1;
      renderPopularMovies(inputVaue, pageNumber);
      addHtml(pageNumber, pageCounter);
    }
};
// function onLoadMore() {
//     pageNumber++;
//     getMoviesData(null, inputVaue, pageNumber)
// };