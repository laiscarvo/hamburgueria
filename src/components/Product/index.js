import { Container } from '../../styles/global'
import { ThemeButton } from '../../styles/button'
import { NameProduct, CategoryProduct } from '../../styles/typography'
import { StyledProduct } from './style'

function Product({ addCart, produto }){
    return(
        
        <StyledProduct>
            <Container className='product'>
                <div className='productCard'>
                    <div className='img'>
                        <img
                            src={produto.img}
                        />
                    </div>
                    <div className='description'>
                        <NameProduct tag='h3' className='name'>{produto.name}</NameProduct>
                        <span className='price'> R$ {produto.price}</span>
                        <CategoryProduct tag="h4"> {produto.category} </CategoryProduct>
                        <ThemeButton
                            buttonSize='md'
                            buttonStyle='solid'
                            className="addCart" 
                            onClick={ () => addCart(produto)}
                        > Adicionar 
                        </ThemeButton> 
                    </div>
                    
                </div>
                <CategoryProduct className='category'> {produto.category} </CategoryProduct>
            </Container>
        </StyledProduct>       
    )
}

    
export default Product