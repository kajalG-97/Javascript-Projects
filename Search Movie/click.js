
  let movie_waiting; // creating globally becoz we dont want everytime fresh id in debounce function
  var moviesPath = document.getElementById("moviesDiv");
  //   moviesPath.innerHTML = ""
  async function searchMovie() {
    try {
      var movie = document.querySelector("#inputID").value;

      if (movie.length <= 2) {
        // no need to search
        return false;
      }

      var res = await fetch(
        `https://www.omdbapi.com/?s=${movie}&apikey=d806bd70`
      );

      var data = await res.json();
      console.log("data:", data.Search);
      var movie_arr = data.Search; // this line only we show data instead of using displayMovie(data.Search)
      displayMovie(movie_arr);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function displayMovie(data) {
    if (data === undefined) {
      // if movie is not present it will return from function
      return false; // iwe using this properties to stop showing error
    }

    data.map(function (el) {
      var movie_name = document.createElement("p");
      movie_name.textContent = el.Title;
      //   movie_name.onClick = seeMovie();
      // movie_name.addEventListener("click",seeMovie)

      let posterImg = document.createElement("img");
      posterImg.src = el.Poster;
      var div_movie = document.createElement("div");
      div_movie.append(movie_name, posterImg);
      div_movie.onclick = async function () {
        let namme = movie_name.innerHTML;
        console.log(namme);
        let url = `https://omdbapi.com/?&apikey=7f925b1a&t=${namme}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("data:", response);

        display(data);
        console.log(data.Error);
        if (data.Error === "Movie not found!") {
          ErrorImg();
        }
      };
      moviesPath.append(div_movie);
    });
  }

  function throttleFunction(func, delay) {
    if (movie_waiting) {
      clearTimeout(movie_waiting);
    }

    movie_waiting = setTimeout(function () {
      func(); //Schedule a setTimeout after delay seconds
    }, delay);
  }

  function ErrorImg() {
    document.querySelector("#displayDiv").innerHTML = "";
    let img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlUG3CbEPItRxLeKzNfuiqNYD1GX6s9O2dma-ceQAMMzUPb1mD9bfVIGu7u9wlf6OGeE&usqp=CAU";
    img.setAttribute("class", "imgError");
    document.querySelector("#displayDiv").append(img);
  }
  function display(data) {
    document.querySelector("#displayDiv").innerHTML = "";
    let div = document.createElement("div");
    div.setAttribute("class", "divv");
    let image = document.createElement("img");
    image.src = data.Poster;

    let name = document.createElement("p");

    name.textContent = data.Title;
    name.style.color = "floralwhite";
    let rating = document.createElement("P");
    rating.textContent = data.imdbRating;

    let date = document.createElement("p");
    date.textContent = data.Released;
    date.style.color = "grey";
    var star = document.createElement("p");
    star.textContent = "★★★★☆";
    star.style.color = "gold";
    star.style.fontSize = "25px";
    let div2 = document.createElement("div");

    div2.append(rating, star);

    div.append(image, name, div2, date);
    document.querySelector("#displayDiv").append(div);
  }