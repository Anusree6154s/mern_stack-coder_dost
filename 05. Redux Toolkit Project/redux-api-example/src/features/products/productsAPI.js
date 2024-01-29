import axios from 'axios';

export function fetchProducts() {
  return axios.get('https://react-redux-database-json-file.onrender.com/products')
}