import {renderPopularMovies} from './1initialHomePage'

const homeButton = document.querySelector('.home')
const myLibButton = document.querySelector('.my_library')

function activeHomePage() {
    renderPopularMovies()
    myLibButton.classList.remove('under_line')
    homeButton.classList.add('under_line')
    console.log('home')
    submenuForm.innerHTML = ''
    submenuForm.insertAdjacentHTML("beforeend", `
        <form>
            <input type="text" placeholder="⌕ Enter search movie...">
        </form>
    `)
    homeButton.classList.add('under_line')
}

function activeLibraryPage() {
    homeButton.classList.remove('under_line')
    myLibButton.classList.add('under_line')
    console.log('library')
    submenuForm.innerHTML = ''
    submenuForm.insertAdjacentHTML("beforeend", `
        <div class="submenu_wrapper">
            <div class="watched active_submenu_item">Watched</div>
            <div class="queue">Queue</div>
        </div>
    `)
}

homeButton.addEventListener('click', () => activeHomePage())
myLibButton.addEventListener('click', () => activeLibraryPage())
