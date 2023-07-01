


document.addEventListener('DOMContentLoaded', async () => {

    
    let names = window.pipe.getNames();

    let divNames = document.getElementById("names");

    let nameString = names.map((elem) => {
        return elem.name;

    }).join("<br />");

    divNames.innerHTML = nameString;
});