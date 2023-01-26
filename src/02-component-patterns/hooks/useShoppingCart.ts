import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
 
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({
        // '1':{...product1, count: 10},
        // '2':{...product2, count: 2}
    });

    const onProductCountChange = ({count, product}:{count:number,product:Product}) => {
        
        setShoppingCart(oldShoppingCart =>{
          
            if(count === 0) {
                //borramos producto
                const { [product.id]:toDelete, ...rest} = oldShoppingCart;
                return {
                    ...rest
                }
            }

            //mas producto
            return {
                ...oldShoppingCart,
                [product.id]:{...product,count}
            }
        })

    }

    return {
        shoppingCart,
        onProductCountChange
    }
}
