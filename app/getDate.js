const searchBar = document.querySelector('#search');
const dateForm = document.querySelector('#myDate');
const FORM = document.querySelector('#searchForm');
const CHOOSE_COUNTRY = document.querySelector('#countryList');

const clg = console.log;


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
