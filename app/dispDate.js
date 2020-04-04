const resultDiv = document.querySelector('#showMe');
var searchBar = document.querySelector('#search');
const FORM = document.querySelector('#searchForm');

const CHOOSE_COUNTRY = document.querySelector('#countryList');
const CHOOSE_MONTH = document.querySelector('#monthDrop');
const CHOOSE_DAY = document.querySelector('#dayDrop');

var clg = console.log; //shorthand variable

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/' //cors anywhere länk (just in case);



var chosenCountry;  // variabler för att spara dropdown värden i
var chosenDay;
var chosenMonth;


// event listeners för dropdowns som "sätter" värde till ovan variabler

CHOOSE_COUNTRY.addEventListener('change', () => chosenCountry = CHOOSE_COUNTRY.options[CHOOSE_COUNTRY.selectedIndex].value);
console.log(chosenCountry)

CHOOSE_DAY.addEventListener('change', () => chosenDay = CHOOSE_DAY.options[CHOOSE_DAY.selectedIndex].text);
console.log(chosenCountry)

CHOOSE_MONTH.addEventListener('change', () => chosenMonth = CHOOSE_MONTH.value);

// function som skickar tillbaka URL att fetcha beroende på vilka värden som ges av input

const getURL = function (country, day, month) {

    if (country !== 0 && searchBar.value) {
        return corsAnywhere + `https://api.abalin.net/getdate?name=${searchBar.value}&country=${chosenCountry}`;
    }

    else if ((country && day && month)) {
        console.log('this is now true TRUE')
        return corsAnywhere + `https://api.abalin.net/namedays?country=${chosenCountry}&month=${chosenMonth}&day=${chosenDay}`;
    }

    else {
        throw new Error('search for either name and country or day/month and country');
    }

}


// main function som hämtar data och renderar

FORM.addEventListener('submit', function (e) {

    e.preventDefault();

    let calcUrl = getURL(chosenCountry, chosenDay, chosenMonth); // sätter calc url till värdet av returnerade värdet från getUrl funktionen

    clg(`chosen country is : ${chosenCountry}, chosen month is : ${chosenMonth}, chosen day is : ${chosenDay}`); //console log för att kolla att värdena stämmer

    resultDiv.innerHTML = ""; //clearar div



    // kör get metoden och skickar med den url som ska sökas på

    getData(calcUrl).then(data => {

        //kollar vilken url som hämtat data och kör därefter lämplig forEach funktion

        if (calcUrl === corsAnywhere + `https://api.abalin.net/getdate?name=${searchBar.value}&country=${chosenCountry}`) {
            data.results.forEach(elem => {

                // ser till att det sökta namnet överänstämmer med något returnerat namn som har namnsdag genom att slice:a 

                const searchedNamed = searchBar.value[0].toUpperCase() + searchBar.value.slice(1); // ser till att första bokstavningen i sökningen alltid är uppercase

                if (elem.name.includes(searchedNamed)) {

                    const renderHTML = `<p>${elem.name}'s nameday is <span>${elem.day}&#47;${elem.month}</span></p>`;
                    resultDiv.innerHTML += renderHTML;
                }
                else {
                    alert(`this name: ${searchedNamed} has no nameday in this country: ${chosenCountry}`); //skickar felmeddeland eom namn ej kan matchas.
                }

            });
        }
        // kör denna funktion om du söker på månad/dag i något land
        else {
            console.log('this is the data', data.data)
            const CC = chosenCountry
            const createHTML = `<p> in ${CHOOSE_COUNTRY.options[CHOOSE_COUNTRY.selectedIndex].text} on 
                ${data.data.dates.day}&#47;${data.data.dates.month} the name ${data.data.namedays[CC]} has a nameday</p>`;
            resultDiv.innerHTML += createHTML;

        }
    }).catch(err => {
        const errHTML = `<h1>somehting went wrong :( ${err}</h1>`  //fångar och skickar felmeddelande.
        resultDiv.innerHTML += errHTML;
    });
});
