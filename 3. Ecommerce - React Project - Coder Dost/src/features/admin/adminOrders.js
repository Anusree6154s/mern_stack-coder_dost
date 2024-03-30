
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, PencilIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE } from '../../app/constants';
import { fetchAllOrdersAsync, selectAllOrders, selectTotalOrders } from './adminSlice';
import { updateOrderAsync } from '../orders/ordersSlice';

function AdminOrders() {
    const dispatch = useDispatch()
    const orders = useSelector(selectAllOrders)

    const [page, setPage] = useState(1)
    const [editStatusIndex, setEditStatusIndex] = useState(null)
    const [sort, setSort] = useState({ _sort: 'id', _order: 'asc' })

    const handlePage = (pageNumber) => {
        setPage(pageNumber)
    }

    useEffect(() => {
        const pagination = { _page: page }
        dispatch(fetchAllOrdersAsync({ sort, pagination }))
    }, [sort, page, editStatusIndex])

    const handleShow = () => {
    }

    const handleUpdateOrder = (e, index) => {
        const order = { ...orders[index], status: e.target.value }
        dispatch(updateOrderAsync(order))
        setEditStatusIndex(null)
    }

    const handleSort = () => {
        sort._order === 'asc' ? setSort({ _sort: 'id', _order: 'desc' }) : setSort({ _sort: 'id', _order: 'asc' })
    }

    console.log(orders)

    return (
        <div>

            {/* component */}
            <div className="overflow-x-auto">
                <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans overflow-auto">
                    <div className="w-full lg:w-full ">
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-center">Sr. No.</th>
                                        <th
                                            className="py-3 px-6 text-left flex gap-4 cursor-pointer"
                                            onClick={handleSort}>
                                            Order Number
                                            {sort._order === 'asc' ?
                                                <ArrowUpIcon className='w-6'></ArrowUpIcon> :
                                                <ArrowDownIcon className='w-6'></ArrowDownIcon>}

                                        </th>
                                        <th className="py-3 px-6 text-left">Items</th>
                                        <th className="py-3 px-6 text-left">Total Amount</th>
                                        <th className="py-3 px-6 text-left">Shipping Address</th>
                                        <th className="py-3 px-6 text-center">Status</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {orders && orders.map((order, index) =>
                                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-center whitespace-nowrap ">
                                                <span className="font-medium ">{(page - 1) * 10 + index + 1}</span>
                                            </td>

                                            <td className="py-3 px-6 text-left whitespace-nowrap ">
                                                <span className="font-medium">{order.id}</span>
                                            </td>

                                            <td className="py-3 px-6 text-left">
                                                {order.items.map(item =>
                                                    <div className="flex">
                                                        <div className="mr-2 ">
                                                            <img
                                                                className="w-6 h-6 rounded-full"
                                                                src={item.product.thumbnail}
                                                            />
                                                        </div>
                                                        <span>{item.product.title}</span>
                                                    </div>
                                                )}
                                            </td>

                                            <td className="py-3 px-6 text-left whitespace-nowrap ">
                                                <span className="font-medium ml-8">$ {order.totalPrice}</span>
                                            </td>

                                            <td className="py-3 px-6 text-left whitespace-nowrap ">
                                                <div className="font-medium">{order.selectedAddress.street}, {order.selectedAddress.city}</div>
                                                <div className="font-medium">{order.selectedAddress.state}, {order.selectedAddress.country}</div>
                                                <div className="font-medium">{order.selectedAddress.pincode}</div>
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                {editStatusIndex !== index ?
                                                    <span className={order.status === 'Pending' ? 'bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs' : order.status === 'Dispatched' ? 'bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs' : 'bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'}>
                                                        {order.status}
                                                    </span> :
                                                    <select onChange={e => handleUpdateOrder(e, index)}>
                                                        <option value="">--choose one--</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Dispatched">Dipatched</option>
                                                        <option value="Delivered">Delivered</option>
                                                    </select>
                                                }
                                            </td>

                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center">
                                                    <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <EyeIcon
                                                            onClick={handleShow}
                                                        ></EyeIcon>
                                                    </div>
                                                    <div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        <PencilIcon
                                                            onClick={() => setEditStatusIndex(index)}
                                                        ></PencilIcon>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <Pagination
                    handlePage={handlePage}
                    page={page}
                    orders={orders}
                ></Pagination>
            </div>

        </div>
    );
}

function Pagination({ handlePage, page, orders }) {
    const totalOrders = useSelector(selectTotalOrders)
    const totalPages = Math.ceil(totalOrders / ITEMS_PER_PAGE)
    return (

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    onClick={e => handlePage(page > 1 ? page - 1 : page)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                    Previous
                </a>
                <a
                    onClick={e => handlePage(page < totalPages ? page + 1 : page)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p
                        className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(page - 1) * ITEMS_PER_PAGE + 1}</span> to <span className="font-medium">{page * ITEMS_PER_PAGE > totalOrders ? totalOrders : page * ITEMS_PER_PAGE}</span> of{' '}
                        <span className="font-medium">{totalOrders}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <div
                            onClick={e => handlePage(page > 1 ? page - 1 : page)}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor pointer"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                className="h-5 w-5 cursor-pointer"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                        {Array.from({ length: totalPages }).map((items, index) =>
                            <div
                                key={index}
                                onClick={e => handlePage(index + 1)}
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center ${(index + 1) === page ? 'bg-customBlue text-white' : 'text-gray-500 hover:bg-gray-50 '} px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customBlue cursor-pointer ring-gray-300  border border-gray-300`}
                            >
                                {index + 1}

                            </div>
                        )}

                        <div
                            onClick={e => handlePage(page < totalPages ? page + 1 : page)}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                className="h-5 w-5 cursor-pointer"
                                aria-hidden="true" />
                        </div>


                    </nav>
                </div>
            </div>
        </div >
    )
}

export default AdminOrders;