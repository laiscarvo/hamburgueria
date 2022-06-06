import { CartLabel, CartTotalTitle,CategoryProduct, NameProduct } from '../../styles/typography'
import { ThemeButton } from '../../styles/button'
import { StyledCart } from './style'



function Cart ({ currentSale, handleRemove, handleRemoveAll }){
    
    return(
        <StyledCart>
            <section className='cart'>
                <div className='titleCart'>
                    <CartLabel tag="h3">Carrinho de compras</CartLabel>
                </div>
                {currentSale.length === 0 ? (
                    <div className="carrinhoVazio">
                        <NameProduct tag='h2' className="semLancamento"> Sua sacola está vazia</NameProduct>
                        <CategoryProduct tag='h4' >Adicione itens</CategoryProduct>
    
                    </div>
                ) : (
                <div>
                    <ul className='ulCart'>
                        {currentSale.map( (produto) => 
                            <li key={produto.id}>
                                <div className='image'>
                                    <img
                                        src={ produto.img }
                                    />
                                </div>
                                <div className='description'>
                                    <NameProduct tag='h4'> {produto.name} </NameProduct>
                                    <CategoryProduct tag='h4'> {produto.category} </CategoryProduct>
                                </div>
                                <ThemeButton onClick={() => handleRemove(produto)} className='remove' buttonSize='sm' buttonStyle='letter'>Remover</ThemeButton>
                            </li>
                        )}
                    </ul> 
                    <div className='priceAndTotal'>
                        <CartTotalTitle tag="h4">
                            Total:
                        </CartTotalTitle>
                        <span className='price'>
                            {currentSale.reduce((a,b) =>a + b.price, 0).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
                            })}
                        </span> 
                    </div>
                    <div className='buttonRemoveTodos'>
                    <ThemeButton onClick={handleRemoveAll}  buttonSize='lg' buttonStyle='outline'> Remover todos</ThemeButton> 
                    </div>
                </div> 
                )}   
            </section>
        </StyledCart>
    )
}

export default Cart