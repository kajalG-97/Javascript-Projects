let data = JSON.parse(localStorage.getItem("GameData"));
console.log('data', data);

async function list() {
    let res = await fetch(`https://api.rawg.io/api/games/${data}?key=cab653694f20430d9700315187126e48&dates=2019-09-01,2022-01-10&platforms=18,1,7`);
    let dat = await res.json();
    // console.log('data', dat);
    displayGame(dat)
    console.log('results', dat);
   

}
list();
let displayGame = (data) => {
    var path = document.querySelector("#searchd");
    
        var div = document.createElement("div");
        var title = document.createElement("h2");
        title.textContent = data.name;
        var image = document.createElement("img");
        image.src = data.background_image;
        div.append(title, image);
        path.append(div);
         
}