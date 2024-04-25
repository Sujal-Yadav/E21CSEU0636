export default function Posts({ availability, discount, price, productName, rating }) {
    return (
        // <div className="flex justify-center items-center p-4">
        //     <div className="">{productName}</div>
        //     <div>{price}</div>
        //     <div>{discount}</div>
        //     <div>{availability}</div>
        //     <div>{rating}</div>
        // </div>
        <div className="flex justify-start  bg-slate-700 border m-4 border-gray-900 rounded-md shadow dark:bg-gray-800 hover:bg-gray-600 outline-2 hover:outline-slate-400 dark:border-gray-700 text-wrap overflow-hidden">
            <div className="p-5 text-wrap w-screen ">

                <div className="mb-2 text-xl font-bold tracking-tight text-black  dark:text-white">Product Name: {productName}</div>
                <div className="mb-3 font-normal  text-gray-700 dark:text-gray-400 ">Price: {price}</div>
                <div className="mb-3 font-normal  text-gray-700 dark:text-gray-400 ">Discount: {discount}</div>
                <div className="mb-3 font-normal  text-gray-700 dark:text-gray-400 ">Availabilty: {availability}</div>
                <div className="mb-3 font-normal  text-gray-700 dark:text-gray-400 ">Rating: {rating}</div>
            </div>
        </div>
    )
}