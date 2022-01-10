function displayRepo(data, location) {
    data.map(({name})=>{
        var div = document.createElement("div");
        var title = document.createElement("h1");
        title.textContent = name;

        div.append(title);
        location.append(div);

    })
};
export {displayRepo}