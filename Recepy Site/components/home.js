function navbar() {
    return `<div id="nav">
      <div id="logo">
          <a href="home.html">
          <img src="data:image/png;base64,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" alt="">
          </a>
      </div>
      <div id="input_div">
          <input type="text"
          id = "searchId"
          placeholder="Search for Recepy">
          <div id="option"></div>
      </div>
      <div id="rday">
          <a href="recepy.html">
          <img src="https://www.freeiconspng.com/thumbs/recipes-icon-png/free-recipe-sheet-clip-art-21.png" alt="">
          </a>
      </div>
       <div id="last">
      <div>
        <a href="signin.html">
          <img
            src="https://img.icons8.com/small/16/000000/login-rounded-down.png"
          />Sign In
        </a>
      </div>
      <div>
        <a href="signUp.html">
          <img
            src="https://img.icons8.com/color/30/000000/add-user-male--v1.png"
          />Sign Up</a
        >
      </div>
    </div>
    <div id="cart">
     <img src="https://img.icons8.com/material-outlined/24/4a90e2/shopping-cart--v1.png"/>
     <a href="cart.html">Cart</a>
   </div>
    </div>`
   
}

 export default navbar