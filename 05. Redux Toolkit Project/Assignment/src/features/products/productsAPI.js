import axios from 'axios';

export function fetchProducts() {
  return axios.get('http://localhost:3000/products')
}

export function updateProducts(id, item) {
  return axios.patch(`http://localhost:3000/products/${id}`, item)
}