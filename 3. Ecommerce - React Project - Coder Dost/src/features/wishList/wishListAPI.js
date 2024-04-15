export function addToWishList(item) {
  console.log(item)
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/wishlist', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    console.log(data)
    resolve({ data });
  });
}

export function fetchWishListByUserId() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/wishlist')
    const data = await response.json()
    resolve({ data })
  });
}


export function deleteItemFromWishList(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/wishlist/' + itemId, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    resolve({ data });
  });
}
