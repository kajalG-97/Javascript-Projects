 
        
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
    data.map(({ name, background_image,released ,genres}) => {
        var div = document.createElement("div");
        div.setAttribute("class","bigdiv")

        var namediv = document.createElement("div")
        var title = document.createElement("h1");
        title.textContent = name;
        
        var image = document.createElement("img");
        image.src = background_image;

        let but = document.createElement("button");
        but.setAttribute("class","button")
        but.innerHTML="More"

        namediv.append(title,but);  

        let moreDiv = document.createElement("div");
        moreDiv.style.display = "none"
        moreDiv.setAttribute("class","more")

        let releasetxt = document.createElement("h5");
        releasetxt.style.margin = "0"
        releasetxt.innerHTML=`Release date:`

        let span = document.createElement("span")
        span.innerHTML = released
        releasetxt.append(span)


        let gentxt = document.createElement("h5");
        gentxt.style.margin = "0"
        gentxt.innerHTML=`genres:`

        let genspan = document.createElement("span")
        let arr = []
        genres.map((ele)=>{
            arr.push(ele.name)
        })
        genspan.innerHTML = arr
        gentxt.append(genspan)

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

        moreDiv.append(releasetxt,gentxt)

        div.append(image,namediv,moreDiv);
        location.append(div);
    })
}
export { Games, displayGame };