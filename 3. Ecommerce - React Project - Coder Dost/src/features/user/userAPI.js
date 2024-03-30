export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users/user/' )
    const data = await response.json()
    resolve({ data })
  }
  );
}



export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/orders?user=' + userId)
    const data = await response.json()
    console.log(data)
    resolve({ data })
  }
  );
}
