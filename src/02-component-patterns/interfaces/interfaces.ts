import {Props as ProductCardProps}  from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTittleProps } from '../components/ProductTittle';
import { Props as ProductButtonProps } from '../components/ProductButtons';

export interface Product{
    id:string,
    tittle:string,
    img?:string
}

export interface ProductContextProps{
    counter:number,
    maxCount?:number,
    increaseBy:(value:number) =>void,
    product:Product
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Tittle: (Props: ProductTittleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props:ProductButtonProps) => JSX.Element
}

export interface onChangeArgs{
    product:Product,
    count:number
}

export interface ProductInCart extends Product{
    count: number
}

export interface InitialValues{
    count?:number,
    maxCount?:number
}

export interface ProductCardHandlers{
    count:number,
    isMaxCountReached:boolean,
    isMinCountReached:boolean,
    maxCount?:number,
    product:Product,
    increaseBy: (value:number) =>void,
    reset: () => void
}