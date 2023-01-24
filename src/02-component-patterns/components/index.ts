
import {ProductImage} from './ProductImage';
import {ProductTittle} from './ProductTittle';
import {ProductButtons} from './ProductButtons';

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export {ProductImage} from './ProductImage';
export {ProductTittle} from './ProductTittle';
export {ProductButtons} from './ProductButtons';



export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Tittle: ProductTittle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;