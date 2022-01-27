 
        
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
    data.map(({ name, background_image,released }) => {
        var div = document.createElement("div");
        div.setAttribute("class","bigdiv")
        var title = document.createElement("h1");
        title.textContent = name;
        var image = document.createElement("img");
        image.src = background_image;

        let moreDiv = document.createElement("div");
        // moreDiv.style.display = "none"
        moreDiv.setAttribute("class","more")

        let date = document.createElement("h2")
        date.innerHTML = released;

        moreDiv.append(date)
        div.append(image,name,moreDiv);
        location.append(div);
    })
}
export { Games, displayGame };