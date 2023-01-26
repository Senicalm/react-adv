import { ProductCard, ProductImage, ProductTittle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {
    
    const { shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

               {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark'
                            value={shoppingCart[product.id]?.count || 0}
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className='custom-image' style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }} />
                            <ProductTittle className='text-white text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
               }
            </div>
            <div className='shopping-card'>

                {
                    Object.entries(shoppingCart).map( ([key, product]) =>{
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                className='bg-dark'
                                style={{ width: '100px' }}
                                value={product.count}
                                onChange={ onProductCountChange }
                            >
                                <ProductImage className='custom-image' style={{
                                    boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                }} />

                                <ProductButtons
                                    className='custom-buttons'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }} />
                            </ProductCard>
                        )
                    })

                }
                {/* <ProductCard
                    product={product2}
                    className='bg-dark'
                    style={{ width: '100px' }}

                >
                    <ProductImage className='custom-image' style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />

                    <ProductButtons
                        className='custom-buttons'
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }} />
                </ProductCard> */}
                {/* <ProductCard
                    product={product2}
                    className='bg-dark'
                    style={{width:'100px'}}
                    
                >
                    <ProductImage className='custom-image' style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />
                    
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                <ProductCard
                    product={product1}
                    className='bg-dark'
                    style={{width:'100px'}}
                >
                    <ProductImage className='custom-image' style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />
                    
                    <ProductButtons className='custom-buttons' />
                </ProductCard> */}
            </div>

            <div>
                <code>
                    {JSON.stringify(shoppingCart,null,5)}
                </code>
            </div>
        </div>
    )
}
