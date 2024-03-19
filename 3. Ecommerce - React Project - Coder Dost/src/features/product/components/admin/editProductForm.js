import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../auth/authSlice";
import { useForm } from "react-hook-form";
import { editProductAsync, fetchProductByIdAsync, selectAllBrands, selectAllCategories, selectProductById } from '../../productSlice';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//TODO: in my own project make changes to add imag eoption to take image from computer as file using multsmthng
//TODO: in own projet, make changes to brands and category to select existing and add new ones too
function EditProductForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()
    const user = useSelector(selectLoggedInUser)
    const brands = useSelector(selectAllBrands)
    const categories = useSelector(selectAllCategories)
    const selectedProduct = useSelector(selectProductById)

    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        if (selectedProduct) {
            setValue('title', selectedProduct.title)
            setValue('description', selectedProduct.description)
            setValue('brand', selectedProduct.brand)
            setValue('category', selectedProduct.category)
            setValue('price', selectedProduct.price)
            setValue('discountPercentage', selectedProduct.discountPercentage)
            setValue('stock', selectedProduct.stock)
            setValue('thumbnail', selectedProduct.thumbnail)
            setValue('image-1', selectedProduct.images[0])
            setValue('image-2', selectedProduct.images[1])
            setValue('image-3', selectedProduct.images[2])
            setValue('image-4', selectedProduct.images[3])
            setValue('highlight-1', selectedProduct.highlights[0])
            setValue('highlight-2', selectedProduct.highlights[1])
            setValue('highlight-3', selectedProduct.highlights[2])
            setValue('highlight-4', selectedProduct.highlights[3])
        }
    }, [selectedProduct])

    useEffect(() => {
        params.id && dispatch(fetchProductByIdAsync(params.id))
    }, [params.id])

    const handleDelete = () => {
        const product = { ...selectedProduct }
        product.deleted = true
        dispatch(editProductAsync(product))
    }

    return (
        <div className='bg-white mx-auto max-w-2xl py-10 px-12 lg:max-w-7xl'>
            <form noValidate onSubmit={handleSubmit((data) => {
                const product = { ...data, id: selectedProduct.id }
                product.images = [product['image-1'], product['image-2'], product['image-3'], product['image-4']]
                product.rating = selectedProduct.rating
                product.highlights = [product['highlight-1'], product['highlight-2'], product['highlight-3'], product['highlight-4']]
                delete product['highlight-1']
                delete product['highlight-2']
                delete product['highlight-3']
                delete product['highlight-4']
                delete product['image-1']
                delete product['image-2']
                delete product['image-3']
                delete product['image-4']
                dispatch(editProductAsync(product))
            })}>
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Product Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('title', { required: 'required' })}
                                        id="title"
                                        autoComplete="title"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    {...register('description', { required: 'required' })}
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="brands" className="block text-sm font-medium leading-6 text-gray-900">
                                Brands
                            </label>
                            <div className="mt-2">
                                <select
                                    {...register('brand', { required: 'required' })}
                                    id="brands">
                                    <option value=''>--- choose brand ---</option>
                                    {brands.map((brand, index) =>
                                        <option key={index} value={brand.label}>{brand.label}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="categories" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    {...register('category', { required: 'required' })}
                                    id="categories">
                                    <option value=''>--- choose category ---</option>
                                    {categories.map((category, index) =>
                                        <option key={index} value={category.label}>{category.value}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        {...register('price', { required: 'required', min: 1 })}
                                        id="price"
                                        autoComplete="price"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="discount-percentage" className="block text-sm font-medium leading-6 text-gray-900">
                                Discount
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        {...register('discountPercentage', { required: 'required', min: 0, max: 100 })}
                                        id="discount-percentage"
                                        autoComplete="discount-percentage"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                                Stock
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="number"
                                        {...register('stock', { required: 'required', min: 0 })}
                                        id="stock"
                                        autoComplete="stock"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                                Thumbnail
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('thumbnail', { required: 'required' })}
                                        id="thumbnail"
                                        autoComplete="thumbnail"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="image-1" className="block text-sm font-medium leading-6 text-gray-900">
                                Image 1
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('image-1', { required: 'required' })}
                                        id="image-1"
                                        autoComplete="image-1"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="image-2" className="block text-sm font-medium leading-6 text-gray-900">
                                Image 2
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('image-2', { required: 'required' })}
                                        id="image-2"
                                        autoComplete="image-2"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="image-3" className="block text-sm font-medium leading-6 text-gray-900">
                                Image 3
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('image-3', { required: 'required' })}
                                        id="image-3"
                                        autoComplete="image-3"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="image-4" className="block text-sm font-medium leading-6 text-gray-900">
                                Image 4
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('image-4', { required: 'required' })}
                                        id="image-4"
                                        autoComplete="image-4"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <p className="block text-sm font-medium leading-6 text-gray-900">
                                Highlights
                            </p>
                            <div className="mt-2">
                                <label htmlFor="highlight-1" className="block text-sm font-medium leading-6 text-gray-900">
                                    Highlight 1
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('highlight-1', { required: 'required' })}
                                        id="highlight-1"
                                        autoComplete="highlight-1"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="highlight-2" className="block text-sm font-medium leading-6 text-gray-900">
                                    Highlight 2
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('highlight-2', { required: 'required' })}
                                        id="highlight-2"
                                        autoComplete="highlight-2"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="highlight-3" className="block text-sm font-medium leading-6 text-gray-900">
                                    Highlight 3
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('highlight-3', { required: 'required' })}
                                        id="highlight-3"
                                        autoComplete="highlight-3"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="highlight-4" className="block text-sm font-medium leading-6 text-gray-900">
                                    Highlight 4
                                </label>
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        type="text"
                                        {...register('highlight-4', { required: 'required' })}
                                        id="highlight-4"
                                        autoComplete="highlight-4"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        onClick={handleDelete}
                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Delete
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProductForm;