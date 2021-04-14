import axios from 'axios'; //importing axios
//Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
const instance = axios.create({ //create instance
    baseURL: "https://api.themoviedb.org/3", //every url has the same starting url
});

export default instance; //export default makes it available everywhere