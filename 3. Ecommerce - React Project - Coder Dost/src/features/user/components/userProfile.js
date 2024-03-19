import { useDispatch, useSelector } from "react-redux";
import { updateUserAsync } from "../../auth/authSlice";
import { selectUserInfo } from "../userSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";

//TODO: payment will be added when working on server

function UserProfile() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const user = useSelector(selectUserInfo)

  const [visibilityIndex, setVisibilityIndex] = useState(null)
  const [addFormVisibility, setaddFormVisibility] = useState(false)

  const handleDelete = (index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1)
    dispatch(updateUserAsync(newUser))
  }

  const handleEdit = (data, index) => {
    const newUser = { ...user, addresses: [...user.addresses] }
    newUser.addresses.splice(index, 1, data)
    dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
  }

  const handleOpenForm = (index) => {
    setVisibilityIndex(index)
    setValue('name', user.addresses[index].name)
    setValue('email', user.addresses[index].email)
    setValue('country', user.addresses[index].country)
    setValue('street', user.addresses[index].street)
    setValue('city', user.addresses[index].city)
    setValue('state', user.addresses[index].state)
    setValue('pincode', user.addresses[index].pincode)
    setValue('phone', user.addresses[index].phone)
  }

  const handleAdd = (data) => {
    dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
  }
  console.log(user)
  return (
    <>
      <div className="flex flex-col bg-white max-w-7xl px-6 py-8 sm:px-6 lg:px-8 mb-6">
        <div>
          <p className="text-gray-900 font-bold text-2xl ">Name</p>
          {user.role === 'admin' && <p className="text-gray-600 font-bold mb-8">{user.role}</p>}
          <p className="text-gray-900 text-lg mb-8">
            <span className=" font-bold ">Email:</span> <span className="font-md">{user.email}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-900 font-bold text-lg flex justify-between">
            <span>Your Addresses:</span>
            <button
              onClick={() => {
                setValue('email', user.email)
                setaddFormVisibility(!addFormVisibility)
              }}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Address</button>
          </p>
          <form
            noValidate
            onSubmit={handleSubmit((data) => handleAdd(data))}
            className={addFormVisibility ? 'hidden mt-6' : ""}
          >
            <div className="pt-6 border-b border-gray-900/10 pb-12  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

            <div className="m-6 flex items-center justify-end gap-x-6">
              <button type="button"
                onClick={() => setaddFormVisibility(!addFormVisibility)}
                className="rounded-md border px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Cancel
              </button>
              <button
                type="submit"
                onClick={() => setaddFormVisibility(!addFormVisibility)}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add
              </button>
            </div>
          </form>
          <div className="mt-2 space-y-6">
            <ul key='0' role="list" className='flex flex-col gap-2'>
              {user.addresses.map((address, index) => (
                <li key={index} className='items-baseline border px-5'>
                  <div className="flex justify-between items-baseline px-5">
                    <div className='flex-col justify-between  items-baseline gap-x-6 py-5 '>
                      <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.city}</p>
                    </div>

                    <div className="hidden shrink-0 sm:flex sm:flex-col ">
                      <p className="text-sm leading-6 text-gray-900">{address.phone}</p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.pincode}</p>
                    </div>

                    <div className="flex shrink-0 sm:flex sm:flex-col sm:items-end">
                      <button
                        onClick={() => handleDelete(index)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => handleOpenForm(index)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  <form
                    noValidate
                    onSubmit={handleSubmit((data) => {
                      handleEdit(data, index)
                    })}
                    className={visibilityIndex !== index ? 'hidden' : ''}
                  >
                    <div className="pt-6 border-b border-t border-gray-900/10 pb-12  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

                    <div className="m-6 flex items-center justify-end gap-x-6">
                      <button type="button"
                        onClick={() => setVisibilityIndex(null)}
                        className="rounded-md border px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        onClick={() => setVisibilityIndex(null)}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default UserProfile