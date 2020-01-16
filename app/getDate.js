<<<<<<< HEAD
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

=======



const getData = async (url) => {
    console.log(url);
    const response = await fetch(url);

    const data = await response.json();

    return data;
}
>>>>>>> 8f1a82e6cdd339d35467e83556faf1945e058a3e
