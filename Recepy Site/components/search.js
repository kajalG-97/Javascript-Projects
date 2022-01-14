async function getdata(url) {
  try {
      
        let res = await fetch(url);
    let data = await res.json();

    return data;
    } catch (error) {
        console.log('error', error);
        
    }
}

function search_data(data, left, right) {

  var menu_div = document.createElement("div");

  var menuImg = document.createElement("img");
  menuImg.src = data.strMealThumb;
  var firstDiv = document.createElement("div");
  var menuName = document.createElement("h2");
  menuName.textContent = data.strMeal;
  var menuCat = document.createElement("p");
  menuCat.textContent = data.strCategory;
  firstDiv.append(menuName, menuCat);

  var secondDiv = document.createElement("div");
  var menuArea = document.createElement("p");
  menuArea.textContent = data.strArea;
  var menuPrice = document.createElement("p");
  menuPrice.textContent = Math.floor(Math.random() * 500) + 200;
  secondDiv.append(menuArea, menuPrice);

  var thirdDiv = document.createElement("div");
  var menuTags = document.createElement("p");
  menuTags.textContent = data.strTags;
  // menuTags.style.color = "green"
  var menuButton = document.createElement("button");
  menuButton.textContent = "more details";
  thirdDiv.append(menuButton, menuTags);
  menuButton.addEventListener("click", showMoreInfo);
  function showMoreInfo() {
    let wrapdiv = document.createElement("div");
    let ing1 = document.createElement("p");
    ing1.innerHTML = data.strIngredient1;

    let ing2 = document.createElement("p");
    ing2.innerHTML = data.strIngredient2;

    let ing3 = document.createElement("p");
    ing3.innerHTML = data.strIngredient3;

    let ing4 = document.createElement("p");
    ing4.innerHTML = data.strIngredient4;

    let ing5 = document.createElement("p");
    ing5.innerHTML = data.strIngredient5;
    let ing6 = document.createElement("p");
    ing6.innerHTML = data.strIngredient6;

    let ing7 = document.createElement("p");
    ing7.innerHTML = data.strIngredient7;

    let ing8 = document.createElement("p");
    ing8.innerHTML = data.strIngredient8;

    let ing9 = document.createElement("p");
    ing9.innerHTML = data.strIngredient9;

    let ing10 = document.createElement("p");
    ing10.innerHTML = data.strIngredient10;

    let ing11 = document.createElement("p");
    ing11.innerHTML = data.strIngredient11;

    let ing12 = document.createElement("p");
    ing12.innerHTML = data.strIngredient12;

    let ing13 = document.createElement("p");
    ing13.innerHTML = data.strIngredient13;

    wrapdiv.append(ing1, ing2, ing3, ing4, ing5, ing6, ing7, ing8, ing9, ing10, ing11, ing12, ing13);
    let info_div = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data.strInstructions;

    info_div.append(paragraph);
    right.append(wrapdiv, info_div);
  }
  menu_div.append(menuImg, firstDiv, secondDiv, thirdDiv);

  left.append(menu_div);
}
export {getdata,search_data}
