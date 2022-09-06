import axios, * as others from 'axios';

export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});
