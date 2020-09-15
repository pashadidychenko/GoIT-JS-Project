import { getMoviesData, genres } from './serviceApi';

const detailFilm = document.getElementById('detailFilm');
const filmList = document.getElementById('filmList');

function activeDetailsPage(id) {
  filmList.hidden = true;
  getMoviesData(id).then(detailFilm => {
    console.log(detailFilm);
  });
}
export { activeDetailsPage };
