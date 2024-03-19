export function createUser(userData) {
  console.log(userData)
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' }
    });
    const data = await response.json();
    console.log('data: ', data)
    // TODO: In server we will only store some info (not password)
    resolve({ data });
  });
}


export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email
    const password = loginInfo.password
    const response = await fetch('http://localhost:8080/users/login?email=' + email)
    const data = await response.json()
    console.log(data)
    if (Object.keys(data).length) {
      password === data.password ? resolve({ data }) : reject('wrong credentials')
    } else {
      reject('user not found')
    }
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users/user/' + update.id, {
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