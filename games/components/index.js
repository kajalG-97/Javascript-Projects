 
        
async function Games(url) {
  try {
      
        let res = await fetch(url);
        let data = await res.json();

         return data;
    } catch (error) {
        console.log('error', error);
        
    }
}

// Games();

let displayGame = (data,location) => {
    // var path = document.querySelector("#grid");
    data.map(({ name, background_image }) => {
        var div = document.createElement("div");
        var title = document.createElement("h1");
        title.textContent = name;
        var image = document.createElement("img");
        image.src = background_image;

        let moreDiv = document.createElement("div");

        div.append(image,name );
        location.append(div);
    })
}
export { Games, displayGame };