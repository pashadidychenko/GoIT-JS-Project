import { onNavigete, pageNumber } from './1initialHomePage';

const logoButton = document.querySelector('.text_logo');
const homeButton = document.querySelector('.home');
const myLibButton = document.querySelector('.my_library');
const homePage = document.querySelector('#homePage');
const detailFilm = document.getElementById('detailFilm');
const libraryBox = document.getElementById('libraryBox');
const leftSide = document.querySelector('.left_side')

function activeHomePage() {
  detailFilm.classList.add('hide');
  homePage.classList.remove('hide');
  myLibButton.classList.remove('under_line');
  homeButton.classList.add('under_line');
  homeButton.classList.add('under_line');
  libraryBox.classList.add('hide');
  onNavigete(`/page=${pageNumber}`);
}

function activeLibraryPage() {
  detailFilm.classList.add('hide');
  homePage.classList.add('hide');
  homeButton.classList.remove('under_line');
  myLibButton.classList.add('under_line');
  libraryBox.classList.remove('hide');
  onNavigete('/myLibrary/');
}

logoButton.addEventListener('click', activeHomePage);
homeButton.addEventListener('click', activeHomePage);
myLibButton.addEventListener('click', activeLibraryPage);
leftSide.addEventListener('click', activeHomePage)
