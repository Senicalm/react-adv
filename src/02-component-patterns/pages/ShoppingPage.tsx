import { ProductCard, ProductImage, ProductTittle, ProductButtons } from '../components';

const product = {
    id:'1',
    tittle:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Tittle tittle={''} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTittle tittle={''} />
                    <ProductButtons />
                </ProductCard>

               

            </div>
        </div>
    )
}
