import { getMoviesData } from './serviceApi';
import { onNavigete } from './1initialHomePage';

const deteilLink = {
  homePage: document.getElementById('homePage'),
  detailFilm: document.getElementById('detailFilm'),
  detailFilmImage: document.getElementById('detailFilmImage'),
  detailFilmTitle: document.getElementById('detailFilmTitle'),
  vote: document.getElementById('vote'),
  popularity: document.getElementById('popularity'),
  originalTitle: document.getElementById('originalTitle'),
  gender: document.getElementById('gender'),
  aboutFilmText: document.getElementById('aboutFilmText'),
  libraryButton: document.getElementById('libraryButton'),
  watched: document.getElementById('watched'),
  queue: document.getElementById('queue'),
  inputForm: document.getElementById('inputForm'),
  buttonContainerGroup: document.getElementById('buttonContainerGroup'),
  filmListLybrary: document.getElementById('filmListLybrary'),
  libraryBox: document.getElementById('libraryBox'),
};

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const fragment = document.createDocumentFragment();
let filmId = null;

queue.addEventListener('click', toggleToQueue);
watched.addEventListener('click', toggleToWatched);
function addHtmlData(fragmentHtml, rootHtml) {
  fragment.append(fragmentHtml);
  rootHtml.innerHTML = '';
  rootHtml.append(fragment);
}

// Detail page
function activeDetailsPage(id) {
  filmId = id;
  monitorButtonStatusText();
  onNavigete(`/${id}/`);
  deteilLink.homePage.classList.add('hide');
  deteilLink.libraryBox.classList.add('hide');
  deteilLink.filmListLybrary.classList.add('hide');
  deteilLink.detailFilm.classList.remove('hide');
  getMoviesData(id).then(detailFilmData => {
    deteilLink.detailFilmImage.src = `${IMAGE_URL}${detailFilmData.poster_path}`;
    addHtmlData(
      `${detailFilmData.title}  (${detailFilmData.release_date.substring(
        0,
        4,
      )})`,
      deteilLink.detailFilmTitle,
    );
    addHtmlData(
      `${detailFilmData.vote_average} / ${detailFilmData.vote_count}`,
      deteilLink.vote,
    );
    addHtmlData(detailFilmData.popularity.toFixed(1), deteilLink.popularity);
    addHtmlData(detailFilmData.original_title, deteilLink.originalTitle);
    addHtmlData(
      detailFilmData.genres.map(({ name }) => `${name}`).join(', '),
      deteilLink.gender,
    );
    addHtmlData(detailFilmData.overview, deteilLink.aboutFilmText);
  });
}

// Button status
function monitorButtonStatusText() {
  const addFilmWatched = 'Add to watched';
  const addFilmQueue = 'Add to queue';
  const removeFilmWatched = 'Remove from watched';
  const removeFilmQueue = 'Remove from queue';
  let filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  let filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  if (filmsWatched !== null) {
    filmsWatched.find(film => film === filmId)
      ? addHtmlData(removeFilmWatched, deteilLink.watched)
      : addHtmlData(addFilmWatched, deteilLink.watched);
  }
  if (filmsQueue !== null) {
    filmsQueue.find(film => film === filmId)
      ? addHtmlData(removeFilmQueue, deteilLink.queue)
      : addHtmlData(addFilmQueue, deteilLink.queue);
  }
}

// add/remove to Queue
function toggleToQueue() {
  let filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  if (filmsQueue === null) {
    localStorage.setItem('filmsQueue', JSON.stringify([filmId]));
    return;
  }
  if (filmsQueue.find(film => film === filmId)) {
    filmsQueue = filmsQueue.filter(film => film !== filmId);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    filmsQueue.push(filmId);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  }
  monitorButtonStatusText();
}

// add/remove to Watched
function toggleToWatched() {
  let filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  if (filmsWatched === null) {
    localStorage.setItem('filmsWatched', JSON.stringify([filmId]));
    return;
  }
  if (filmsWatched.find(film => film === filmId)) {
    filmsWatched = filmsWatched.filter(film => film !== filmId);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  } else {
    filmsWatched.push(filmId);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  }
  monitorButtonStatusText();
}

export { activeDetailsPage };
