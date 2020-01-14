const searchBar = document.querySelector('#search');
const dateForm = document.querySelector('#myDate');
const FORM = document.querySelector('#searchForm');
const CHOOSE_COUNTRY = document.querySelector('#countryList');
const CHOOSE_MONTH = document.querySelector('#monthDrop');
const CHOOSE_DAY = document.querySelector('#dayDrop');

const dayValue = CHOOSE_DAY.options[CHOOSE_DAY.selectedIndex].value;
const monthValue = CHOOSE_MONTH.options[CHOOSE_MONTH.selectedIndex].value;
const countryValue = CHOOSE_COUNTRY.options[CHOOSE_COUNTRY.selectedIndex].value;

const clg = console.log;
clg(countryValue);

const url = "";



const getData = async (date) => {

    const response = await fetch(`https://api.abalin.net/getdate?name=${searchBar.value}&country=${CHOOSE_COUNTRY.value}`);

    clg(response);

    if (!response.ok) {
        throw new Error(`Response was not OK. Status Code was ${response.status}.`);
    }

    const data = response.json();

    clg(data);

    return data;
}


/* const getDataByDate = async () => {

    const response2 = await fetch(`https://api.abalin.net/namedays?country=${CHOOSE_COUNTRY.value}&month=${CHOOOSE_MONTH}&day=${CHOOOSE_DAY}`);

    clg(response2);

    if (!response.ok) {
        throw new Error(`Response was not OK. Status Code was ${response.status}.`);
    }

    const dateData = response2.json();

    clg(dateData);

    return dateData;

} */