export function createUser(userData) {
  console.log(userData)
  return new Promise(async (resolve) => {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function LoginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password
    const response = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'content-type': 'application/json' }
    })
    if (response.ok) {
      const data = await response.json()
      resolve({ data })
    } else {
      const error = await response.text();
      reject(error)
    }

  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('/auth/check')
    if (response.ok) {
      const data = await response.json()
      resolve({ data })
    } else {
      const error = await response.text();
      reject(error)
    }
  });
}




export function sendOTP(item) {
  return new Promise(async (resolve, reject) => {
    console.log(item)
    const response = await fetch('/auth/sendOTP', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: { 'content-type': 'application/json' }
    })
    if (response.ok) {
      const data = await response.json()
      console.log("data: ", data)
      resolve({ data })
    } else {
      const error = await response.json();
      reject({ error })
    }

  });
}

export function resetPassword(item) {
  console.log(item)
  return new Promise(async (resolve) => {
    const response = await fetch('/auth/resetpassword/' + item.userId, {
      method: 'PATCH',
      body: JSON.stringify({ password: item.password }),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  console.log("update: ", update)
  return new Promise(async (resolve) => {
    const response = await fetch('/users/user/' + update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function signOut() {
  return new Promise(async (resolve) => {
    resolve({ data: 'success' });
  });
}