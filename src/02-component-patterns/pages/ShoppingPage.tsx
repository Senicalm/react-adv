import { ProductCard, ProductImage, ProductTittle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className='bg-dark'
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({count, increaseBy, isMinCountReached,isMaxCountReached, reset}) => (
                        <>
                            <ProductImage className='custom-image' style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }} />
                            <ProductTittle className='text-white text-bold' />
                            <ProductButtons className='custom-buttons' />
                            <button onClick={reset}>Reset</button>
                            {
                                (!isMinCountReached&&<button onClick={() => increaseBy(-2)}>-2</button>)
                            }
                            {
                                (!isMaxCountReached&&<button onClick={() => increaseBy(2)}>+2</button>)
                            }
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
