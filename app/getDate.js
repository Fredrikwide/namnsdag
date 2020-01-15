


const getData = async (url) => {
    console.log(url);
    const response = await fetch(url);
    clg(response);
    const data = await response.json();
    clg(data);
    return data;
}