import axios from 'axios';

export function fetchItems() {
  return axios.get('https://react-redux-database-json-file.onrender.com/cart')
}

export function addItem(item) {
  return axios.post('https://react-redux-database-json-file.onrender.com/cart', item)
}

export function updateItem(id, itemQuantity) {
  return axios.patch(`https://react-redux-database-json-file.onrender.com/cart/${id}`, itemQuantity)
}

export function deleteItem(id) {
  return axios.delete(`https://react-redux-database-json-file.onrender.com/cart/${id}`)
}