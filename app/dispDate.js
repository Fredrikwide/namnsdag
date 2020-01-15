const resultDiv = document.querySelector('#showMe');
var searchBar = document.querySelector('#search');
const FORM = document.querySelector('#searchForm');

const CHOOSE_COUNTRY = document.querySelector('#countryList');
const CHOOSE_MONTH = document.querySelector('#monthDrop');
const CHOOSE_DAY = document.querySelector('#dayDrop');

var clg = console.log;

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
let fetchURL;
let fetchURL1 = corsAnywhere + `https://api.abalin.net/namedays?country=${chosenCountry}&month=${chosenMonth}&day=${chosenDay}`;
let fetchURL2 = corsAnywhere + `https://api.abalin.net/getdate?name=${searchBar.value}&country=${chosenCountry}`

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
        return fetchURL = fetchURL2;
    }

    else if ((country !== 0 && day !== 0 && month !== 0)) {
        return fetchURL = fetchURL1;
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
        data.results.forEach(elem => {
            clg(elem);
            if (elem.name.includes(searchBar.value)) {
                clg('hello');
                const find = elem.name.indexOf(searchBar.value);
                clg(find);
                const namelng = find + searchVal.length;
                clg(namelng);
                const name = elem.name.slice(namelng, name);
                clg('i found this name', name);
            }
            const renderHTML = `<p>${name} name day is <span>${elem.day}&#47;${elem.month}</span></p>`;
            resultDiv.innerHTML += renderHTML;
        });

    }).catch(err => {
        const errHTML = `<h1>somehting went wrong :( ${err}</h1>`
        resultDiv.innerHTML += errHTML;
    })
});
