(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,t,n){"use strict";n.r(t);n("cgVt"),n("JBxO"),n("FdtR"),n("wcNg");function r(e,t,n,r,i,a,o){try{var d=e[a](o),c=d.value}catch(e){return void n(e)}d.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function d(e){r(o,i,a,d,c,"next",e)}function c(e){r(o,i,a,d,c,"throw",e)}d(void 0)}))}}var a=n("czhI").default,o="66f23c1b86846c1f0c0b18d0fb8daf16",d="https://api.themoviedb.org/3/movie/popular?api_key=",c="https://api.themoviedb.org/3/search/movie?api_key=",l="https://api.themoviedb.org/3/movie/";function u(e,t,n){return s.apply(this,arguments)}function s(){return(s=i(regeneratorRuntime.mark((function e(t,n,r){var i,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=1),null===t){e.next=7;break}return e.next=6,a.get(""+l+t+"?api_key="+o+"&language=en-US&include_adult=false").then((function(e){return i=e.data}));case 6:return e.abrupt("return",i);case 7:if(null===n){e.next=11;break}return e.next=10,a.get(""+c+o+"&language=en-US&query="+n+"&page="+r+"&include_adult=true").then((function(e){return u=e.data.results}));case 10:return e.abrupt("return",u);case 11:return e.next=13,a.get(""+d+o+"&language=en-US&page="+r).then((function(e){return s=e.data.results}));case 13:return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n("lmye"),n("lYjL"),n("IlJM"),n("8cZI"),n("D/wG"),n("ZEAQ");var m={homePage:document.getElementById("homePage"),detailFilm:document.getElementById("detailFilm"),detailFilmImage:document.getElementById("detailFilmImage"),detailFilmTitle:document.getElementById("detailFilmTitle"),vote:document.getElementById("vote"),popularity:document.getElementById("popularity"),originalTitle:document.getElementById("originalTitle"),gender:document.getElementById("gender"),aboutFilmText:document.getElementById("aboutFilmText"),libraryButton:document.getElementById("libraryButton"),watched:document.getElementById("watched"),queue:document.getElementById("queue"),inputForm:document.getElementById("inputForm"),buttonContainerGroup:document.getElementById("buttonContainerGroup"),filmListLybrary:document.getElementById("filmListLybrary"),libraryBox:document.getElementById("libraryBox")},g=document.createDocumentFragment(),f=null;function v(e,t){g.append(e),t.innerHTML="",t.append(g)}function p(e){f=e,h(),_("/"+e+"/"),m.homePage.classList.add("hide"),m.libraryBox.classList.add("hide"),m.filmListLybrary.classList.add("hide"),m.detailFilm.classList.remove("hide"),u(e).then((function(e){m.detailFilmImage.src="https://image.tmdb.org/t/p/w500"+e.poster_path,v(e.title+"  ("+e.release_date.substring(0,4)+")",m.detailFilmTitle),v(e.vote_average+" / "+e.vote_count,m.vote),v(e.popularity.toFixed(1),m.popularity),v(e.original_title,m.originalTitle),v(e.genres.map((function(e){return""+e.name})).join(", "),m.gender),v(e.overview,m.aboutFilmText)}))}function h(){var e=JSON.parse(localStorage.getItem("filmsWatched")),t=JSON.parse(localStorage.getItem("filmsQueue"));null!==e&&(e.find((function(e){return e===f}))?v("Remove from watched",m.watched):v("Add to watched",m.watched)),null!==t&&(t.find((function(e){return e===f}))?v("Remove from queue",m.queue):v("Add to queue",m.queue))}queue.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("filmsQueue"));if(null===e)return void localStorage.setItem("filmsQueue",JSON.stringify([f]));e.find((function(e){return e===f}))?(e=e.filter((function(e){return e!==f})),localStorage.setItem("filmsQueue",JSON.stringify(e))):(e.push(f),localStorage.setItem("filmsQueue",JSON.stringify(e)));h()})),watched.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("filmsWatched"));if(null===e)return void localStorage.setItem("filmsWatched",JSON.stringify([f]));e.find((function(e){return e===f}))?(e=e.filter((function(e){return e!==f})),localStorage.setItem("filmsWatched",JSON.stringify(e))):(e.push(f),localStorage.setItem("filmsWatched",JSON.stringify(e)));h()}));var y=[],L=1,b=document.getElementById("detailFilm"),E=document.getElementById("libraryBox"),S=document.createDocumentFragment(),_=function(e){window.history.pushState({},e,window.location.origin+e)};function I(e){var t=document.querySelector("#films-gallery");u(null,null,e).then((function(e){e.map((function(e){y.push(e),B(e),S.append(B(e))})),t.innerHTML="",t.append(S)})),_("/page="+e)}function B(e){var t=e.backdrop_path,n=e.title,r=e.id,i=e.vote_average,a=e.release_date,o=document.querySelector("#films-gallery"),d=document.createElement("a"),c=document.createElement("li");c.addEventListener("click",(function(){return p(r)})),c.className="card__container";var l=document.createElement("div");l.className="card__title",l.innerHTML="("+a.substring(0,4)+") "+n;var u=document.createElement("div");u.classList.add("vote_rating"),u.innerHTML="★ "+i;var s,m=document.createElement("img");return m.className="card__img",s=null===t?"https://image.freepik.com/free-vector/404_175838-592.jpg":"https://image.tmdb.org/t/p/w500/"+t,m.setAttribute("src",s),m.setAttribute("alt",n),c.append(l,m,u),d.append(c),o.append(d),d}function q(e){"reset"===e&&(L=1),"add"===e&&(L+=1),"remove"===e&&(L-=1)}_("/"),b.classList.add("hide"),E.classList.add("hide"),I(L);var w=null,T=document.querySelector(".search-form"),k=document.querySelector("#search-input"),F=document.getElementById("button-control-prev"),x=document.querySelector("#button-control-next"),N=document.getElementById("error-message"),H=document.getElementById("page-counter"),J=document.getElementById("button-container");function M(e,t){S.append(e),t.innerHTML="",t.append(S)}function A(e,t){N.classList.add("hide"),u(null,e,t).then((function(e){e.length<20&&x.classList.add("hide"),1===t&&F.classList.add("hide"),0===e.length&&(N.classList.remove("hide"),x.classList.add("hide"),F.classList.add("hide"),_("/search?error")),e.length>20&&x.classList.remove("hide"),e.map((function(e){x.classList.remove("hide"),F.classList.remove("hide"),y.push(e),B(e),S.append(B(e))}));var n=document.querySelector("#films-gallery");n.innerHTML="",n.append(S),M(t,H)})),_("/search?"+e+"/page="+t)}N.classList.add("hide"),T.addEventListener("submit",(function(e){e.preventDefault(),q("reset"),A(w,L),M(L,H),T.reset()})),k.addEventListener("input",(function(e){w=e.target.value})),J.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;1===L&&F.classList.add("hide");"Next"===e.target.name&&(F.classList.remove("hide"),q("add"),M(L,H),w?A(w,L):I(L));if("Prev"===e.target.name){if(1===L)return void F.classList.add("hide");x.classList.remove("hide"),q("remove"),M(L,H),w?A(w,L):I(L)}})),M(L,H);var O=document.querySelector(".text_logo"),j=document.querySelector(".home"),Q=document.querySelector(".my_library"),W=document.querySelector("#homePage"),P=document.getElementById("detailFilm"),D=document.getElementById("libraryBox"),R=document.querySelector(".left_side"),G=document.getElementById("filmListLybrary");function U(){G.classList.add("hide"),P.classList.add("hide"),W.classList.remove("hide"),Q.classList.remove("under_line"),j.classList.add("under_line"),j.classList.add("under_line"),D.classList.add("hide"),I(1),_("/page="+L)}O.addEventListener("click",U),j.addEventListener("click",U),Q.addEventListener("click",(function(){G.classList.remove("hide"),P.classList.add("hide"),W.classList.add("hide"),j.classList.remove("under_line"),Q.classList.add("under_line"),D.classList.remove("hide"),_("/myLibrary/")})),R.addEventListener("click",U);var Y={myLibHome:document.querySelector("#mylib-home"),myLibListItem:document.querySelector(".home__list-item"),watchedButton:document.querySelector("#watched-button"),queueButton:document.querySelector("#queue-button"),filmListLybrary:document.getElementById("filmListLybrary")},C=document.createDocumentFragment();function V(e,t){C.append(e),t.innerHTML="",t.append(C)}var Z=document.querySelector("#films-gallery-lybrary");function z(e){var t=e.backdrop_path,n=e.title,r=e.id,i=e.vote_average,a=e.release_date,o=document.createElement("a"),d=document.createElement("li");d.addEventListener("click",(function(){return p(r)})),d.className="card__container";var c=document.createElement("div");c.className="card__title",c.innerHTML="("+a.substring(0,4)+") "+n;var l=document.createElement("div");l.classList.add("vote_rating"),l.innerHTML="★ "+i;var u,s=document.createElement("img");return s.className="card__img",u=null===t?"https://image.freepik.com/free-vector/404_175838-592.jpg":"https://image.tmdb.org/t/p/w500/"+t,s.setAttribute("src",u),s.setAttribute("alt",n),d.append(c,s,l),o.append(d),Z.append(o),o}Y.watchedButton.addEventListener("click",(function(){V("",Z),Y.filmListLybrary.classList.remove("hide");var e=document.querySelector("#watched-button"),t=document.querySelector("#queue-button"),n=document.querySelector("#mylib-home");e.classList.remove("active-nav-button"),t.classList.add("active-nav-button");var r=JSON.parse(localStorage.getItem("filmsWatched"));if(null===r||0===r.length)return n.insertAdjacentHTML("beforeend",'<div class="no-list">\n            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>\n              </div>');var i=r.map((function(e){u(e).then((function(e){return z(e)}))})).join("");n.innerHTML="",n.insertAdjacentHTML("beforeend",i)})),Y.queueButton.addEventListener("click",(function(){V("",Z),Y.filmListLybrary.classList.remove("hide");var e=document.querySelector("#watched-button"),t=document.querySelector("#queue-button"),n=document.querySelector("#mylib-home");e.classList.remove("active-nav-button"),t.classList.add("active-nav-button");var r=JSON.parse(localStorage.getItem("filmsQueue"));if(null===r||0===r.length)return n.insertAdjacentHTML("beforeend",'<div class="no-list">\n            <h2 class="no-list__item">You do not have to queue movies to watch. Add them.</h2>\n              </div>');var i=r.map((function(e){u(e).then((function(e){return z(e)}))})).join("");n.innerHTML="",n.insertAdjacentHTML("beforeend",i)}))},cgVt:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.aa00ffea9f134c75064d.js.map