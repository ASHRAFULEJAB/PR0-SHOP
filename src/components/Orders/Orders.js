import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContext } from '../../layouts/Main/Main';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';

const Orders = () => {
    const products = useContext(ProductContext)
    const [cart,setCart]=useState([])
    

    const handleAddToCart = (product)=>{
       let newCart=[]
       const exists = cart.find(existingProduct=> existingProduct.id === product.id)
       if(!exists){
           product.quantity = 1;
           newCart=[...cart,product]
       }
       else{
        const rest = cart.filter(existingProduct=> existingProduct.id !== product.id)
        exists.quantity = exists.quantity+1;
        newCart=[...rest,exists]
       }
       setCart(newCart)
       addToDb(product.id)
       toast.success('🦄 Product Added!', {
        position: "top-left",
        autoClose: 500,
  
        });
    }
    
    return (
  
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                      Brand new
                    </p>
                  </div>
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="bc9273ce-29bb-4565-959b-714607d4d027"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">Choose</span>
                    </span>{' '}
                    your way. Advance everyday.
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                  </p>
                </div>
                <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                  {
                    products.map(product =><Product
                    
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ToastContainer={ToastContainer}
                    >

                    </Product>)
                  }
                  
                  
                </div>
              </div>
            );
          };


export default Orders;