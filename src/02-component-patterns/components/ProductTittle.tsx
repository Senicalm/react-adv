import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from "../styles/styles.module.css";

export const ProductTittle = ({ tittle }: { tittle:string}) => {

    const { product } = useContext(ProductContext);
   
    return (
        <span className={styles.productDescription}>{tittle?tittle:product.tittle}</span>
    )
}