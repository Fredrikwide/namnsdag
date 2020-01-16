const resultDiv = document.querySelector('#showMe');
var searchBar = document.querySelector('#search');
const FORM = document.querySelector('#searchForm');

const CHOOSE_COUNTRY = document.querySelector('#countryList');
const CHOOSE_MONTH = document.querySelector('#monthDrop');
const CHOOSE_DAY = document.querySelector('#dayDrop');

var clg = console.log;

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'


var chosenCountry;
var chosenDay;
var chosenMonth;


CHOOSE_COUNTRY.addEventListener('change', function (e) {
    chosenCountry = CHOOSE_COUNTRY.options[CHOOSE_COUNTRY.selectedIndex].value;
    clg(chosenCountry);


})

CHOOSE_DAY.addEventListener('change', function (e) {
    chosenDay = CHOOSE_DAY.options[CHOOSE_DAY.selectedIndex].text;
    clg(chosenDay);

})

CHOOSE_MONTH.addEventListener('change', function (e) {
    chosenMonth = CHOOSE_MONTH.value;
    clg(chosenMonth);

})

const getURL = function (country, day, month) {

    if (country !== 0 && searchBar.value) {
        return corsAnywhere + `https://api.abalin.net/getdate?name=${searchBar.value}&country=${chosenCountry}`;
    }

    else if ((country !== 0 && day !== 0 && month !== 0)) {
        return corsAnywhere + `https://api.abalin.net/namedays?country=${chosenCountry}&month=${chosenMonth}&day=${chosenDay}`;
    }

    else {
        throw new Error('search for either name and country or day/month and country');
    }

}

FORM.addEventListener('submit', function (e) {

    e.preventDefault();

    let calcUrl = getURL(chosenCountry, chosenDay, chosenMonth);

    clg(`chosen country is : ${chosenCountry}, chosen month is : ${chosenMonth}, chosen day is : ${chosenDay}`);

    resultDiv.innerHTML = "";

    getData(calcUrl).then(data => {
        console.log(data);

        if(calcUrl === corsAnywhere + `https://api.abalin.net/getdate?name=${searchBar.value}&country=${chosenCountry}`)
        {
            data.results.forEach(elem => {

            clg("searchBar", searchBar.value, "elem", elem.name);

            const searchedNamed = searchBar.value[0].toUpperCase() + searchBar.value.slice(1);

            clg(searchedNamed);
                elem.find(current => {
                    if(elem.name === searchedNamed){      
                        const renderHTML = `<p>${elem.name}s nameday is <span>${elem.day}&#47;${elem.month}</span></p>`;
                        resultDiv.innerHTML += renderHTML;
                    }
                    else 
                    {
                        throw new Error (`this name: ${searchBar.value} has no nameday in this country: ${chosenCountry}`)
                    }
                });
       }); 
        }
    else {
        data.data.forEach(day => {
                const CC = chosenCountry;
                const createHTML = `<p> in ${CHOOSE_COUNTRY.options[CHOOSE_COUNTRY.selectedIndex].text} on 
                ${day.dates.day}&#47;${day.dates.month} the name ${day.namedays[CC]} has a nameday</p>`;
                resultDiv.innerHTML += createHTML;
                clg(`no nameday for ${searchBar.value} in this ${chosenCountry}`);    
        })
    }
    }).catch(err => {
        const errHTML = `<h1>somehting went wrong :( ${err}</h1>`
        resultDiv.innerHTML += errHTML;
    })
});