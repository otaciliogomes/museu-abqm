import axios from 'axios';


const api = axios.create({
    baseURL: "https://api.abqm.net.br:3333",
})

export { api };