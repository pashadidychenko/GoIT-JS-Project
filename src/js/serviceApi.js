const Axios = require('axios').default;

const API_KEY = '66f23c1b86846c1f0c0b18d0fb8daf16';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=';
const DETAIL_URL = 'https://api.themoviedb.org/3/movie/';

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

export { getMoviesData };
