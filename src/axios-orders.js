import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-a8a21-default-rtdb.firebaseio.com/'
});

export default instance;