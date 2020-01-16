
//hämtar data från API och omvandlar till JSON-data och returnerar said data

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}