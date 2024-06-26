import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key : '223ec05c06b84e9a8bdbce714737b0dd'
    }
})