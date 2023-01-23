import { ReactElement } from 'react';

export interface ProductCardProps{
    product:Product,
    children?:ReactElement|ReactElement[]
}

export interface Product{
    id:string,
    tittle:string,
    img?:string
}

export interface ProductContextProps{
    counter:number,
    increaseBy:(value:number) =>void,
    product:Product
}