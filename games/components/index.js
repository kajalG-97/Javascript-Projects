 
        
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

        var namediv = document.createElement("div")
        var title = document.createElement("h1");
        title.textContent = name;
        
        var image = document.createElement("img");
        image.src = background_image;

        let but = document.createElement("button");
        but.innerHTML="More"

        namediv.append(title,but)

        but.addEventListener("click",more);

        

        let moreDiv = document.createElement("div");

        moreDiv.style.display = "none"
        moreDiv.setAttribute("class","more")

        let releasetxt = document.createElement("p");
        releasetxt.style.margin = "0"
        
        releasetxt.innerHTML="Release date:"

        let date = document.createElement("h2")
        date.innerHTML = released;
        // date.style.border = "solid red"
        date.style.margin = "0"

        but.addEventListener("click",more);

        function more() {
            if(but.value=='More'){
                
                moreDiv.style.display = 'none';
                but.value = 'Less';
            }else{
                but.value = 'More';
                moreDiv.style.display = 'inline';
            }
        }
        // function more(){
        //     moreDiv.style.display = "flex"
        //     // moreDiv.style.background="yellow"
        //     but.textContent = "Less"
            

        //     // moreDiv.border = "solid"
        // }


        moreDiv.append(releasetxt,date)
        div.append(image,namediv,moreDiv);
        location.append(div);
    })
}
export { Games, displayGame };