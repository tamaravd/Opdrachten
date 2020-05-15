const movieList = document.querySelector("#movieList");
const radioNw = document.querySelector("#nw");
const radioAvengers = document.querySelector("#avengers");
const radioXMen = document.querySelector("#x-men");
const radioPrincess = document.querySelector("#princess");
const radioBatman = document.querySelector("#batman");
const search = document.getElementById("searchvalue");

//in div container alle titels laten verschijnen
//movieList.innerHTML += " test " + e.Title + " \n" ;

Array.from(moviesData).forEach(e => {
  movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>' ;
});

//zoekbutton maken

search.onkeypress = (e) =>  {
  if (event.key === "Enter") {
      let zoekGetypteTitel = search.value;
      let zoekvalue = zoekGetypteTitel.charAt(0).toUpperCase()+ zoekGetypteTitel.slice(1);
      movieList.innerHTML = "";
      let zoekFilms = moviesData.filter((e) => e.Title.includes(zoekvalue));
      Array.from(zoekFilms).forEach(e => {
        movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>';
  });
}};

//buttons click events maken, filteren op nieuw en op titel.

radioNw.addEventListener("click", event => {
  movieList.innerHTML = "";
  let nwFilms = moviesData.filter(n => n.Year >= 2014);
  Array.from(nwFilms).forEach(e => {
    movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>' ;
  });
} );

radioAvengers.addEventListener("click", event => {
  movieList.innerHTML = "";
  let avengersFilms = moviesData.filter(n => n.Title.includes("Avengers"));
  Array.from(avengersFilms).forEach(e => {
    movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>' ;
  });
} );

radioXMen.addEventListener("click", event => {
  movieList.innerHTML = "";
  let xMenFilms = moviesData.filter(n => n.Title.includes("X-Men"));
  Array.from(xMenFilms).forEach(e => {
    movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>';
  });
} );

radioPrincess.addEventListener("click", event => {
  movieList.innerHTML = "";
  let princessFilms = moviesData.filter(n => n.Title.includes("Princess"));
  Array.from(princessFilms).forEach(e => {
    movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>';
  });
} );

radioBatman.addEventListener("click", event => {
  movieList.innerHTML = "";
  let batmanFilms = moviesData.filter(n => n.Title.includes("Batman"));
  Array.from(batmanFilms).forEach(e => {
      movieList.innerHTML += '<li id="movie"><a href="https://www.imdb.com/title/' + e.imdbID + '" ><img src=" ' + e.Poster + '" /></a></li>';
  });
} );
