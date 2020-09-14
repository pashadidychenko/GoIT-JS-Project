import { getMoviesData } from './serviceApi';
import { renderFilms, pageNumber, createCardFunc } from './1initialHomePage';

let inputVaue ='';

const refs = {
    serchForm: document.querySelector('.search-form'),
    textarea: document.querySelector('#search-form'),
    prevBtn: document.querySelector('#prevBtn'),
    nextBtn: document.querySelector('#nextBtn')
  };
  refs.serchForm.addEventListener('submit', searchFilms);
  //   refs.prevBtn.addEventListener('click', () => {});
  refs.nextBtn.addEventListener('click', onLoadMore );  

function fetchFilms(inputVaue, pageNumber) {
    if (inputVaue ==='') {
        // refs.serchForm.innerHTML = '<p class="text">You didn`t write film`s name! Try again!</p>';
        refs.serchForm.insertAdjacentHTML ('beforeend', '<p class="text">You didn`t write film`s name! Try again!</p>');
        renderPopularMovies()
        }  else {
            getMoviesData(null, inputVaue, pageNumber)
            .then(films => {films.map(film => {renderFilms.push(film)})});
            inputVaue ='';
        }
    };

function searchFilms(e) {
    e.preventDefault();
    inputVaue= e.target.value;
    fetchFilms(inputVaue, 1);
}

function onLoadMore() {
    pageNumber++;
    getMoviesData(null, inputVaue, pageNumber)
}
  
    