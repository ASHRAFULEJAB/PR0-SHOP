import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


export const ProductContext= createContext([])
export const CartContext = createContext([])
const Main = () => {
        const {products,initailCart} = useLoaderData()
        const [cart,setCart]=useState(initailCart)
       
        
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;