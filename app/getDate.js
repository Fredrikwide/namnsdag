const searchBar = document.querySelector('#search');
const dateForm = document.querySelector('#myDate');
const FORM = document.querySelector('#searchForm');
const CHOOSE_COUNTRY = document.querySelector('#countryList');


const getData = async (date) => {
    
    const response = await fetch(`https://api.abalin.net/getdate?name=${searchBar.value}&country=${CHOOSE_COUNTRY.value}`);
       
        console.log(response);
        if (!response.ok) {
            throw new Error(`Response was not OK. Status Code was ${response.status}.`);
        }

    const data = response.json();

    console.log(data);

}
