const searchBar = document.querySelector('#search');
const dateForm = document.querySelector('#pickdate');
const FORM = document.querySelector('#searchForm');

const search = "https://cors-anywhere.herokuapp.com/" 
+ `https://api.abalin.net/getdate?name=${searchBar.value}&country=se"`

const getDate = async function  (){
    const response = await fetch(search);
    const data = await response.json();
    console.log(data);
    return data;
}

const datePick = function () {
    var myDate = document.querySelector(myDate);
    var today = new Date();
    myDate.value = today.toISOString().substr(0, 10);
  };