import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
 
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({
        // '1':{...product1, count: 10},
        // '2':{...product2, count: 2}
    });

    const onProductCountChange = ({count, product}:{count:number,product:Product}) => {
        
        setShoppingCart(oldShoppingCart =>{

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count+=count;
                return{
                    ...oldShoppingCart,
                    [product.id]:productInCart
                }
            }


            //Borrar producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return {
                ...rest
            }

            // if(count === 0) {
            //     //borramos producto
            //     const { [product.id]:toDelete, ...rest} = oldShoppingCart;
            //     return {
            //         ...rest
            //     }
            // }

            // //mas producto
            // return {
            //     ...oldShoppingCart,
            //     [product.id]:{...product,count}
            // }
        })

    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
