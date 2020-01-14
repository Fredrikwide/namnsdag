let resultDiv = document.querySelector('#displayResultHere');

// sortera länder efter bokstavorning

function sortSelectOptions() {

    let options = CHOOSE_COUNTRY.options;

    let optionsArray = [];
    for (let i = 0; i < options.length; i++) {
        optionsArray.push(options[i]);
    }
    optionsArray = optionsArray.sort(function (a, b) {
        return a.innerHTML.charCodeAt(0) - b.innerHTML.charCodeAt(0);
    });

    for (let i = 0; i <= options.length; i++) {

        options[i] = optionsArray[i];
    }

}

sortSelectOptions();




const checkResults = (name, day, month) => {
    getData().then(data => {


    })
}


// rendera resultaten från get-metoden

const renderResults = () => {

    // kör get-metoden och sedan rendera resultat


}

FORM.addEventListener('submit', function (e) {
    e.preventDefault();
    getData().then(data => {

        console.log(data);

        data.results.forEach(elem => {

            clg(elem.name);

            let renderHTML = `<p>${elem.name}</p>`;

            resultDiv += renderHTML;

        });
    });
});
