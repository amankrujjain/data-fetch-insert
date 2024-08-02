// https://jsonplaceholder.typicode.com/posts
const axios = require('axios')


async function fetchData(){
    const fetch = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const result = fetch.data;
    console.log(result)
}

fetchData()