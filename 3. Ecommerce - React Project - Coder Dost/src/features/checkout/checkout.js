import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { deleteItemFromCartAsync, resetCartAsync, selectItems, updateCartAsync } from "../cart/cartSlice"
import { useForm } from "react-hook-form"
import { selectLoggedInUser, updateUserAsync } from "../auth/authSlice"
import { useEffect, useState } from "react"
import { createOrderAsync, selectCurrentOrder } from "../orders/ordersSlice"

//TODO: create order sucess page
//TODO: clear cart items upon clicking order now
//TODO: stock number change in server 
//TODO: radio button click function on div
function Checkout() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const dispatch = useDispatch()
    const items = useSelector(selectItems)
    const user = useSelector(selectLoggedInUser)
    console.log('user: ', user)
    const currentOrder = useSelector(selectCurrentOrder)

    const totalPrice = items.reduce((amount, item) => item.price * item.quantity + amount, 0)
    const totalItems = items.reduce((amount, item) => item.quantity + amount, 0)

    const [selectedAddress, setSelectedAddress] = useState({})
    const [paymentMethod, setpaymentMethod] = useState('cash')


    const handleQuantity = (e, item) => dispatch(updateCartAsync({ ...item, quantity: +e.target.value }))
    const handleDelete = (item) => dispatch(deleteItemFromCartAsync(item.id))
    const handleAddress = e => setSelectedAddress(JSON.parse(e.target.value))
    const handlePayment = e => setpaymentMethod(e.target.value)
    const handleOrder = () => {
        const order = { items, totalPrice, totalItems, user: user.id, selectedAddress, paymentMethod, status: 'Pending' }
        dispatch(createOrderAsync(order))
        dispatch(resetCartAsync(user.id))  //reset cart
    }

    return (
        <div>
            {!items.length && <Navigate to='/' replace={true}></Navigate>}
            {currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true}></Navigate>}
            <div className=" grid gap-10 max-w-7xl  lg:grid-cols-5">
                <div className='lg:col-span-3 px-4 py-6 sm:px-6 lg:px-8 bg-white'>
                    <form noValidate onSubmit={handleSubmit((data) => {
                        dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
                        reset()
                    })}>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-lg font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Full name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('name', { required: 'required' })}
                                                id="full-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                {...register('email', { required: 'required' })}
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                {...register('country', { required: 'required' })}
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>India</option>
                                                <option>China</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('street', { required: 'required' })}
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('city', { required: 'required' })}
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            State
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('state', { required: 'required' })}
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pin code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('pincode', { required: 'required' })}
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...register('phone', { required: 'required' })}
                                                id="phone"
                                                autoComplete="phone"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Address
                                </button>
                            </div>

                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 space-y-10">
                                    {user.addresses.length !== 0 &&
                                        <fieldset >
                                            <legend className="text-lg font-semibold leading-7 text-gray-900"> Address</legend>
                                            <p className="mt-1 text-sm leading-6 text-gray-600">Choose from existing addresses</p>
                                            <div className="mt-6 space-y-6">
                                                <ul key='0' role="list" className='flex flex-col gap-2'>
                                                    {user.addresses.map((address, index) => (
                                                        <li key={index} className=' flex justify-between items-baseline border px-5'>
                                                            <div className=' flex items-baseline gap-5 '>
                                                                <input
                                                                    type="radio"
                                                                    name='address'
                                                                    onChange={e => handleAddress(e)}
                                                                    value={JSON.stringify(address)}
                                                                />
                                                                <label htmlFor="" className="flex justify-between gap-x-6 py-5">
                                                                    <div className="flex min-w-0 gap-x-4">
                                                                        <div className="min-w-0 flex-auto">
                                                                            <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.city}</p>
                                                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pincode}</p>

                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>

                                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                                                <p className="text-sm leading-6 text-gray-900">{address.phone}</p>

                                                            </div>

                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </fieldset>
                                    }
                                    <fieldset>
                                        <legend className=" font-semibold leading-7 text-gray-900 text-lg">Payment</legend>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    onChange={e => handlePayment(e)}
                                                    defaultChecked='true'
                                                    value="cash"
                                                    id="cash"
                                                    name="payment"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Cash
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    onChange={e => handlePayment(e)}
                                                    value="card"
                                                    id="card-payment"
                                                    name="payment"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Card Payment
                                                </label>
                                            </div>

                                        </div>
                                    </fieldset>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                <div className='lg:col-span-2 '>
                    <div className='bg-white px-4 sm:px-6 lg:px-8 '>
                        <div className="flex flex-col bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex-1 px-4 py-6 sm:px-6 flow-root">
                                <ul key='1' role="list" className="-my-6 divide-y divide-gray-200">
                                    {items.map((item, index) => (
                                        <li key={index} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={item.product.images[0]}
                                                    alt={item.product.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href={item.product.id}>{item.product.title}</a>
                                                        </h3>
                                                        <p className="ml-4">$ {item.product.price * item.quantity}</p>
                                                    </div>
                                                    {/* <p className="mt-1 text-sm text-gray-500">{item.color}</p> */}
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
                                    <Link
                                        to={currentOrder && `/order-success/${currentOrder.id}`}
                                        onClick={handleOrder}
                                        href="#"
                                        className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Order Now
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

                </div>

            </div>
        </div >
    );
}

export default Checkout;