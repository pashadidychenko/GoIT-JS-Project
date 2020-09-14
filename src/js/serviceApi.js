const Axios = require('axios').default;

const API_KEY = '66f23c1b86846c1f0c0b18d0fb8daf16';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const DETAIL_URL = 'https://api.themoviedb.org/3/movie/';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=';
const genres = [];

async function getMoviesData(movieId = null, inputVaue = null, pageNumber = 1) {
  if (movieId !== null) {
    let moviesDetail;
    await Axios.get(
      `${DETAIL_URL}${movieId}?api_key=${API_KEY}&language=en-US&include_adult=false`,
    ).then(response => (moviesDetail = response.data));
    return moviesDetail;
  }
  if (inputVaue !== null) {
    let searchFilm;
    await Axios.get(
      `${SEARCH_URL}${API_KEY}&language=en-US&query=${inputVaue}&page=${pageNumber}&include_adult=true`,
    ).then(response => (searchFilm = response.data.results));
    return searchFilm;
  }
  let popularFilm;
  await Axios.get(
    `${POPULAR_URL}${API_KEY}&language=en-US&page=${pageNumber}`,
  ).then(response => (popularFilm = response.data.results));
  return popularFilm;
}

async function fetchGenres() {
  await Axios.get(
    `${GENRES_URL}${API_KEY}&language=en-US&include_adult=false`,
  ).then(response => response.data.genres.map(el => genres.push(el)));
  return genres;
}
fetchGenres();

export { getMoviesData, genres };

// Добавлен глобальный запрос на получение данних с кинопоиска, а так же глобально доступ к переменной с жанрами genres
// Как сними работать:

// Если в Вашей части нужны данные с кинопоиска или переменная genres, первым делом импортируем их в свой файл:
// import { getMoviesData, genres } from './serviceApi';

// переменная genres уже в себе содержит масив с жанрами, можем с ним на прямую уже работать.

// Глобальный запрос getMoviesData это функция которая принимает три переменных (movieId, inputVaue, pageNumber) getMoviesData(movieId, inputVaue, pageNumber).

// Как с ней работать:

// ДЕТАЛЬНОЕ ОПИСАНИЕ КОНКРЕТНОГО ФИЛЬМА
// Если нам нужно получить данные о фильме мы вызиваем ее и передаем туда movieId в ответ получаем промис который обрабатываем через then, на выходе получаем готовый обьект с данными о выбраном фильме. ПРИМЕР:
// getMoviesData(movieId).then(data => {moviesDetail => {console.log(moviesDetail)});
// в место console.log(moviesDetail) в фигурных скобках мы ставим свой код который рисует разметку по полученым данным.

// МАСИВ ПОПУЛЯРНЫХ ФИЛЬМОВ
// Если нам нужно получить популярные фильмы вызиваем функцию getMoviesData(null, null, pageNumber), на выходе получаем масив обьектов с популярними фильмами, после проходимся по нему мапом и пушим в переменную по которой у нас потом идет прорисовка данных (у нас это renderFilms), при изменении страницы мы меняем pageNumber, очищяем масив renderFilms, повторно вызиваем getMoviesData(null, null, pageNumber) уже с новым номером страници и в этой функции пушим новые данные в renderFilms. ПРИМЕР:
// getMoviesData(null, null, pageNumber).then(films => {films.map(film => {renderFilms.push(film)}

// ПОИСК ФИЛЬМОВ ПО СТРОКЕ ЗАПРОСА
// Работает аналогично как при запросе популярных фильмов только добавляется строка запроса getMoviesData(null, 'inputVaue', pageNumber) обрабатывается так же как и при поиске популярных.
// getMoviesData(null, inputVaue, pageNumber).then(films => {films.map(film => {renderFilms.push(film)}

// Ниже примеры для просмотра данных которые получаем, в зависимости от того что Вам нужно раскоментируйте нужную часть, и можно будет увидеть полученные данные в консоли.

// ДЕТАЛЬНОЕ ОПИСАНИЕ КОНКРЕТНОГО ФИЛЬМА
// getMoviesData(550).then(moviesDetail => {
//   console.log('moviesDetail', moviesDetail);
// });

// МАСИВ ПОПУЛЯРНЫХ ФИЛЬМОВ
// getMoviesData(null, null, 1).then(popularFilm => {
//   console.log('popularFilm', popularFilm);
// });

// ПОИСК ФИЛЬМОВ ПО СТРОКЕ ЗАПРОСА
// getMoviesData(null, 'cat', 1).then(searchFilm =>
//   console.log('searchFilm', searchFilm),
// );
