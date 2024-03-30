export function fetchProducts() {
  return new Promise(async (resolve) => {
    //TODO: We will not hardcode server-url here
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve(data)
  });
}

export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    //TODO: We will not hardcode server-url here
    const response = await fetch('http://localhost:8080/products/' + id)
    const data = await response.json()
    resolve(data)
  });
}

export function fetchProductsByFilters(role, filter, sort, pagination) {
  //filter={"category":["smartphones", "laptops"]}
  //sort={_sort:"price", _order:"desc"}
  //pagination={_page:1, _limit:10} //_paege=1&_limit=10

  // TODO: on server we will support multi values for filter
  let queryString = ``
  for (let key in filter) {
    const categoryValues = filter[key]
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`

  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}`
  }

  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/products?role=${role}&` + queryString)
    const data = await response.json()
    const totalItemData = await fetch(`http://localhost:8080/products?role=${role}&_limit=1000`)
    const total = await totalItemData.json()
    resolve({ products: data, totalItems: total.length })
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/categories')
    const data = await response.json()
    resolve(data)
  }
  );
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/brands')
    const data = await response.json()
    resolve(data)
  }
  );
}

//admin
export function createProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json()
    resolve(data)
  }
  );
}

export function editProduct(product) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/'+product.id, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json()
    console.log("data: ", data)
    resolve(data)
  }
  );
}

