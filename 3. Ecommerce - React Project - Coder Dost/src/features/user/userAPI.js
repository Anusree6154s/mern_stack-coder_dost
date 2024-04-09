export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch('/users/user/')
    const data = await response.json()
    resolve({ data })
  }
  );
}



export function fetchLoggedInUserOrders(userId) {
  console.log(userId)
  return new Promise(async (resolve) => {
    const response = await fetch('/orders?user=' + userId)
    const data = await response.json()
    console.log(data)
    resolve({ data })
  }
  );
}
