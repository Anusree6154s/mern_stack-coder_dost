export function createOrder(item) {
    console.log("orderItem: ", item)
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/orders', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        resolve({ data })
    }
    );
}

export function updateOrder(order) {
    console.log(order)
    return new Promise(async (resolve) => {
        const response = await fetch('http://localhost:8080/orders/' + order.id, {
            method: 'PATCH',
            body: JSON.stringify(order),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        resolve({ data })
    });
}