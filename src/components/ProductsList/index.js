import Product from '../Product'
import { StyledUl, StyleSection } from './style'


function ProductsList( { products, addCart, showProducts }){
    return(
        <StyleSection>
            <StyledUl>
                {products?.map(produto => (
                    <Product key={produto.id} produto={produto} addCart={addCart} showProducts={showProducts}/>
                ))}
            </StyledUl>
        </StyleSection>
    )
}

export default ProductsList