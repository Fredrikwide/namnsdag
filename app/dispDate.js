const resultDiv = document.querySelector('#displayResultHere');

const renderResults = () => {
    getData().then(data => {
        console.log(data);
        searchBar.value = "";
        data.results.forEach(elem => {
            const makeVis = `<div id="newDiv"><p>${elem.name}</p></div>`

            resultDiv.innerHTML += makeVis;

        });
    });
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    renderResults();

});
