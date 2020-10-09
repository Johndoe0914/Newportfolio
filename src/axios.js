import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:5001/porfolio-2940a/us-central1/api'
})

export default instance