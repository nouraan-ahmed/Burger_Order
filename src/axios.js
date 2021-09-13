import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://notes-app-b5e05-default-rtdb.firebaseio.com/'
});

export default instance;