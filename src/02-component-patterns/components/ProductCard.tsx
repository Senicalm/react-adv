import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement, useRef } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;


export interface Props{
    // children?:ReactElement|ReactElement[],
    children:(args:ProductCardHandlers) => JSX.Element,
    product:Product,
    className?:string,
    style?:CSSProperties,
    onChange?:(args:onChangeArgs) => void,
    value?:number,
    initialValues?: InitialValues
}

export const ProductCard = ( {children, product, className, style, onChange, value, initialValues}:Props ) => {

    const { counter,maxCount, isMaxCountReached, isMinCountReached, increaseBy, reset } = useProduct( {onChange, product, value, initialValues} );
    

    return (
        <Provider value={{
            counter,
            maxCount,
            increaseBy,
            product
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                { children({
                    count:counter,
                    isMaxCountReached:isMaxCountReached,
                    isMinCountReached:isMinCountReached,
                    product,
                    increaseBy,
                    reset
                }) }
            </div>
        </Provider>
    )
}


