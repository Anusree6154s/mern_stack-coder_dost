import axios from 'axios';

export function fetchItems() {
  return axios.get('http://localhost:3000/cart')
}

export function addItem(item) {
  return axios.post('http://localhost:3000/cart', item)
}

export function updateItem(id, itemQuantity) {
  return axios.patch(`http://localhost:3000/cart/${id}`, itemQuantity)
}

export function deleteItem(id) {
  return axios.delete(`http://localhost:3000/cart/${id}`)
}