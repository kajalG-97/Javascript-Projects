 async function Games() {
    response = await fetch(
        // `https://api.rawg.io/api/platforms?key=cab653694f20430d9700315187126e48`
        `https://api.rawg.io/api/games?key=cab653694f20430d9700315187126e48&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    );
    data = await response.json();
     console.log("data:", data.results);
     displayGame(data.results);
    
}
Games();
function displayGame(data) {
    var path = document.querySelector("#grid");
    data.map(({ name, background_image }) => {
        var div = document.createElement("div");
        var title = document.createElement("h2");
        title.textContent = name;
        var image = document.createElement("img");
        image.src = background_image;
        div.append(name, image);
        path.append(div);
    })
}