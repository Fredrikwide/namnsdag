const searchBar = document.querySelector('#search');
const dateForm = document.querySelector('#myDate');
const FORM = document.querySelector('#searchForm');

const getDate = async function (){
    const response = await fetch(`https://api.abalin.net/getdate?name=${searchBar.value}&country=us`);
    const data = await response.json();
    return data;
}

