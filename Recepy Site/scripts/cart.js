var cart = JSON.parse(localStorage.getItem("AddCartData")) || [];
var total = 0;
// displayCart(data);
var count = 0;
function displayCart(data) {
    // document.getElementById("cartDiv").innerHTML = "";
    data.map((ele, index) => {
        count++;
        var div = document.createElement("div");
        var menuImg = document.createElement("img");
        menuImg.src = ele.menuImg;
        var smdiv = document.createElement("div");
        
        var menuName = document.createElement("h2");
        menuName.textContent = ele.menuName;
         total += Number(ele.menuPrice);
        var menuPrice = document.createElement("h2");
        menuPrice.textContent = `₹ ${ele.menuPrice}/-`;
        

        // console.log('menuPrice', typeof(menuPrice));
        // console.log('menuPrice', menuPrice);

        smdiv.append(menuName, menuPrice);
       
        console.log('total', total);
        
         var deleteP= document.createElement("button");
      deleteP.textContent="Delete";
      // adding event listener for the delete op
      deleteP.addEventListener("click",function(){
           removeItem(index);
      })
        div.append(menuImg,smdiv,deleteP);
        document.getElementById("cartDiv").append(div);
    });
    let totalcost = document.getElementById("totalPay");
    totalcost.innerHTML = `₹ ${total}/-`;
    document.getElementById("count").innerHTML = count;
}
displayCart(cart);

 // delete operation;
  function removeItem(index){
      var newTotal=0;
      cart.splice(index, 1);
       document.querySelector("#count").textContent=cart.length;
    //    localStorage.setItem("AddCartData",JSON.stringify(arr));

        document.querySelector("#totalPay").textContent=newTotal;
      displayCart(cart);
  }
