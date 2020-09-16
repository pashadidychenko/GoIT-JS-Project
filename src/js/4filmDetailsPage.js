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
};
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const fragment = document.createDocumentFragment();

function addHtmlData(fragmentHtml, rootHtml) {
  fragment.append(fragmentHtml);
  rootHtml.innerHTML = '';
  rootHtml.append(fragment);
}

function activeDetailsPage(id) {
  onNavigete(`/${id}/`);
  deteilLink.homePage.classList.add('hide');
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
export { activeDetailsPage };

function monitorButtonStatusText() {}
//которая следит за состоянием (значок и текст в кнопке) читает  local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках: Delete from queue / Add to queue ; Delete from watched / Add to watched.

function toggleToQueue() {}
// (будет добавлять или удалять фильмы из очереди просмотра), которая создает переменную массива в очереди, читает local storage по ключу filmsQueue если результат не пустой то пушит элементы в нашу переменную, ! также функция вплотную работает с глобальной переменной selectFilm, и если selectFilm содержиться в нашей переменной то убираем его оттуда иначе добавляем selectFilm в нашу переменную, потом эта функция кладет нашу переменную в  local storage, запускает в конце себя функцию monitorButtonStatusText;

function toggleToWatched() {}

// (будет добавлять или удалять фильмы из просмотренных), суть ее работы один в один как toggleToQueue  только работает с local storage по ключу filmsWatched.

function showDetails() {}
// которая принимает параметром selectFilm (глобальная переменная - объект, которая создана в задаче номер три) и рендерит всю разметку согласно макета, в этой функции запускается функция monitorButtonStatusText.
