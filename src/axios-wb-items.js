import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://warner-bros-b3574.firebaseio.com'
})

export default instance;