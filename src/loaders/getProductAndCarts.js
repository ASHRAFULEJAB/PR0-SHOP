import { getStoredCart } from "../utilities/fakedb"

export const ProductAndCarts = async()=>{
    const productsData = await fetch('products.json') 
    const products = await productsData.json()

    const savedCart = getStoredCart()
    
    const initailCart=[];
    for(const id in savedCart){
        
        const foundProduct = products.find(product => product.id === id)
        
        if(foundProduct){
            const quantity =savedCart[id];
            foundProduct.quantity=quantity;
            initailCart.push(foundProduct);
        }
    }

    return {products,initailCart}
}