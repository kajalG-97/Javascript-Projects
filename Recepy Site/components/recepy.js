async function getdata(url) {
  try {
      
        let res = await fetch(url);
    let data = await res.json();

    return data;
    } catch (error) {
        console.log('error', error);
        
    }
}

function displayData(data,location) {
    data.map(({strMealThumb,strMeal,strArea,strTags,strCategory}) =>{
        var menu_div = document.createElement("div");

      var menuImg = document.createElement("img");
        menuImg.src = strMealThumb;
      var firstDiv = document.createElement("div");
       var menuName = document.createElement("h2");
      menuName.textContent = strMeal;
       var menuCat = document.createElement("p");
      menuCat.textContent = strCategory;
      firstDiv.append(menuName, menuCat)

      var secondDiv = document.createElement("div");
       var menuArea = document.createElement("p");
      menuArea.textContent = strArea;
      var menuPrice = document.createElement("p");
      menuPrice.textContent = Math.floor(Math.random() * 500) + 200;
      secondDiv.append(menuArea, menuPrice);

       var menuTags = document.createElement("p");
      menuTags.textContent = strTags;
      
      var menuButton = document.createElement("button");
      menuButton.textContent = "more details -->";
        menuButton.addEventListener("click", showMoreInfo);
      menu_div.append(menuImg,firstDiv,secondDiv,menuTags );

      location.append(menu_div);
        
    })
}
let showMoreInfo = () => {
    
    var info_div = document.createElement("div");
    let list = document.createElement("ol");
    let listNum = document.createElement("li")

}
let displaySearchList = (data,location) => {
    if (data === undefined) {
      return false;
    }

    data.forEach(({ strMealThumb, strMeal }) => {
      console.log("data", data);

      var menu_div = document.createElement("div");

      var menuImg = document.createElement("img");
      menuImg.src = strMealThumb;

      var menuName = document.createElement("h2");
      menuName.textContent = strMeal;
      menu_div.append(menuImg, menuName);
      location.append(menu_div);
    });
  };
export {getdata,displayData,displaySearchList}