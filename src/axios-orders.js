import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-3f842.firebaseio.com/'
});

export default instance;
