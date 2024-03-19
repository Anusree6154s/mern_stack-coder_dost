import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from "./cartSlice"

//TODO:items.quantity number change on multiple number of same item added to cart
function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)

  const totalPrice = items.length > 0 ? items.reduce((amount, item) => item.product.price * item.quantity + amount, 0) : 0
  const totalItems = items.length > 0 ? items.reduce((amount, item) => item.quantity + amount, 0) : 0

  console.log(items)
  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ ...item, quantity: +e.target.value }))
  }

  const handleDelete = (item) => {
    dispatch(deleteItemFromCartAsync(item.id))
  }

  return (
    <div >
      {!items.length && <Navigate to='/' replace={true}></Navigate>}

      <div className="flex flex-col bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-1 px-4 py-6 sm:px-6 flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((item, index) => (
              <li key={index} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={item.href}>{item.product.title}</a>
                      </h3>
                      <p className="ml-4">$ {item.product.price * item.quantity}</p>
                    </div>
                    {/* <p className="mt-1 text-sm text-gray-500">{item.product.color}</p> */}
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">
                      <label className='mr-3'>Qty</label>
                      <select onChange={(e) => handleQuantity(e, item)} className='py-0 rounded-md' value={item.quantity} name="" id="">
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                      </select>

                    </p>

                    <div className="flex">
                      <button
                        onClick={() => handleDelete(item)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>


        </div>

        <div className="border-t border-gray-200  px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base  font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <div className="flex justify-between text-base my-4 font-medium text-gray-900">
            <p>Total number of Items</p>
            <p>{totalItems} Items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link to='/checkout'
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Checkout
            </Link>


          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <Link to='/'>
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"

                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart