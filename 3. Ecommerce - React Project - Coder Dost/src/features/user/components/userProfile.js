import { useDispatch, useSelector } from "react-redux";
import { checkAuthAsync, updateUserAsync } from "../../auth/authSlice";
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

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
    formState: { errors: errors2 },
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
    dispatch(updateUserAsync(newUser))
  }

  const handleOpenForm = (index) => {
    setVisibilityIndex(index)
    setValue2('name', user.addresses[index].name)
    setValue2('email', user.addresses[index].email)
    setValue2('country', user.addresses[index].country)
    setValue2('street', user.addresses[index].street)
    setValue2('city', user.addresses[index].city)
    setValue2('state', user.addresses[index].state)
    setValue2('pincode', user.addresses[index].pincode)
    setValue2('phone', user.addresses[index].phone)
  }

  const handleAdd = (data) => {
    console.log("data: ", data)
    dispatch(updateUserAsync({ ...user, addresses: [...user.addresses, data] }))
  }


  return (
    <>
      {user
        ? <div className="flex flex-col bg-white max-w-7xl px-6 py-8 sm:px-6 lg:px-8 mb-6">
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
                className={"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " + (addFormVisibility ? "hidden mt-6" : "")}>Add Address</button>
            </p>
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                handleAdd(data)
                setaddFormVisibility(!addFormVisibility)
              })}
              className={addFormVisibility ? '' : "hidden mt-6"}
            >
              <div className="pt-6 border-b border-gray-900/10 pb-12  grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('name', { required: 'required' })}
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.name && <p className="text-red-500">* required</p>}
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      {...register('email')}
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email && <p className="text-red-500">* required</p>}
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      {...register('country', { required: 'required' })}
                      autoComplete="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>India</option>
                      <option>China</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('street', { required: 'required' })}
                      id="street"
                      autoComplete="address-level3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.street && <p className="text-red-500">* required</p>}
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
                  {errors.city && <p className="text-red-500">* required</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register('state', { required: 'required' })}
                      id="state"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.state && <p className="text-red-500">* required</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">
                    Pin code
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register('pincode', { required: 'required' })}
                      id="pincode"
                      name="pincode"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.pincode && <p className="text-red-500">* required</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register('phone', { required: 'required' })}
                      id="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500">* required</p>}
                </div>
              </div>

              <div className="m-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={() => setaddFormVisibility(!addFormVisibility)}
                  className="rounded-md border px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Cancel
                </button>
                <button
                  type="submit"
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
                      onSubmit={handleSubmit2((data) => {
                        console.log("data: ", data)
                        handleEdit(data, index)
                        setVisibilityIndex(null)
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
                              {...register2('name', { required: 'required' })}
                              id="full-name"
                              autoComplete="given-name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.name && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div className="mt-2">
                            <input
                              id="email"
                              {...register2('email', { required: 'required' })}
                              type="email"
                              autoComplete="email"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.email && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-3">
                          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                            Country
                          </label>
                          <div className="mt-2">
                            <select
                              id="country"
                              {...register2('country', { required: 'required' })}
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
                          <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                            Street address
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register2('street', { required: 'required' })}
                              id="street"
                              autoComplete="street"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.street && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            City
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register2('city', { required: 'required' })}
                              id="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.city && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                            State
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register2('state', { required: 'required' })}
                              id="region"
                              autoComplete="address-level1"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.state && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">
                            Pin code
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register2('pincode', { required: 'required' })}
                              id="pincode"
                              autoComplete="pincode"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.pincode && <p className="text-red-500">* required</p>}
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register2('phone', { required: 'required' })}
                              id="phone"
                              autoComplete="phone"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                          {errors2.phone && <p className="text-red-500">* required</p>}
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
        : <div className="loader"></div>
      }


    </>
  );
}

export default UserProfile