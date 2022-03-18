function navbar() {
    return `<div class="name"> <b>R A W G</b> </div>
        <div class="search">
            <input type="text" placeholder="Search" id="searchId">
            <div id="option"></div>
        </div>
        <div class="id">
            <div class="acc">KG</div>
            <div class="library">My library</div>
        </div>`
}
function sidebar(){
    return `<h2 href="index.html">Home</h2>
    <h2>Rewies</h2>`
}
export  {navbar,sidebar};