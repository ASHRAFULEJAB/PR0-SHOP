import React from 'react';


const Product = ({product,handleAddToCart,ToastContainer}) => {
    const{image,category,description,id,price,title}=product
    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-2xl hover:shadow">
                    <div className="relative w-full h-48">
                      <img
                        src={image}
                        className="object-cover w-full h-full rounded-t"
                        alt="Plan"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                      <div>
                        <div className="text-lg font-semibold">{title}</div>
                        <p className="text-sm text-gray-900">
                          {description.slice(0,65)}
                        </p>
                        <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
                          ${price}
                        </div>
                      </div>
                      <button
                      onClick={()=>handleAddToCart(product)}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none"
                      >
                        Buy Now
                      </button>
                      <ToastContainer/>
                    </div>
                  </div>
)};

export default Product;