var cart = JSON.parse(localStorage.getItem("AddCartData")) || [];
var total = 0;
// displayCart(data);
var count = 0;
function displayCart(data) {
    // document.getElementById("cartDiv").innerHTML = "";
    data.map((ele,index) => {
        console.log('ele', ele.price);
        var div = document.createElement("div");
        var menuImg = document.createElement("img");
        menuImg.src = ele.Img;
        var menuPrice = document.createElement("h2");
        menuPrice.textContent = ele.price;
        total+=Number(ele.price);
         var deleteP= document.createElement("button");
      deleteP.textContent="Delete";
      // adding event listener for the delete op
      deleteP.addEventListener("click",function(){
           removeItem(index);
      })
        div.append(menuImg, menuPrice,deleteP);
        document.getElementById("cartDiv").append(div);
    });

}
displayCart(cart);
 // delete operation;
  function removeItem(index){
      var newTotal=0;
      cart.splice(index, 1);
       document.querySelector("#cartIcon > h3").textContent=data.length;
       localStorage.setItem("AddCartData",JSON.stringify(arr));

        document.querySelector("#bottom > #totalPay").textContent=newTotal;
       showData(data);
  }
