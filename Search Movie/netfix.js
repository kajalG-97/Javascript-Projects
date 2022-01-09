
  async function Movies() {
    response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=ea39d6f5ca912283285ae9675454fba4"
    );
    data = await response.json();
    console.log("data:", data.results);
    display(data.results);
  }
  Movies();
  function display(data) {
    var path = document.querySelector("#trading");
    data.map(function (el) {
      var movie_div = document.createElement("div");
      var posterImg = document.createElement("img");
      posterImg.setAttribute("class", "img");
      posterImg.src = `https://image.tmdb.org/t/p/w500${el.poster_path}`;
      var movie_name = document.createElement("h1");
      movie_name.textContent = el.title;
      var releseDate = document.createElement("h2");
      releseDate.textContent = el.release_date;
      var rating = document.createElement("h1");
      rating.textContent = el.vote_average;
      movie_div.append(posterImg, movie_name, releseDate, rating);
      path.append(movie_div);
    });
  }
