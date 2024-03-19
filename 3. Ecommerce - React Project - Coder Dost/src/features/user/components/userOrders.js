import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

function UserOrders() {
    const dispatch = useDispatch()
    const user = useSelector(selectLoggedInUser)
    const orders = useSelector(selectUserOrders)
    useEffect(() => {
        dispatch(fetchLoggedInUserOrdersAsync(user.id))
    }, [])
    return (
        <>
            {orders && orders.map(order =>

                <div className="flex flex-col bg-white max-w-7xl px-6 py-8 sm:px-6 lg:px-8 mb-6">
                    <p className="text-gray-900 font-bold text-2xl mb-8">Order #{order.id}</p>
                    <div className="flex flex-col border px-4 py-2  sm:px-6">
                        <p className="text-gray-900 font-bold text-lg">Items:</p>
                        <div className="flex-1 py-6 flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {order.items.map((item, index) => (
                                    <li key={index} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a >{item.title}</a>
                                                    </h3>
                                                    <p className="ml-4">$ {item.price * item.quantity}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                                <p>Qty: {item.quantity}</p>
                                                <p className={`mt-1 text-sm ${order.status === 'Pending' ? 'text-red-700' : 'text-green-700'} `}>Order Status: {order.status}</p>
                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>


                        </div>

                        <div className="border-t border-gray-300  px-4 pt-6 sm:px-6">
                            <div className="flex justify-between text-base  font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$ {order.totalPrice}</p>
                            </div>
                            <div className="flex justify-between text-base my-4 font-medium text-gray-900">
                                <p>Total number of Items</p>
                                <p>{order.totalItems} Items</p>
                            </div>
                        </div>
                    </div>

                    {Object.keys(order.selectedAddress).length !== 0 &&
                        <div className="border mt-6 space-y-2 items-baseline p-5 px-4 py-6 sm:px-6">
                            <p className="text-gray-900 font-bold text-lg">Shipping to:</p>
                            <div className=" flex justify-between   ">
                                <div className="hidden shrink-0 sm:flex sm:flex-col  ">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{order.selectedAddress.name}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.city}</p>
                                </div>

                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{order.selectedAddress.phone}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.selectedAddress.pincode}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            )}
        </>
    );
}

export default UserOrders;