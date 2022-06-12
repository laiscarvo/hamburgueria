import Dashboard from './pages/Dashboard';
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'

import React from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react'
import { StyleApp } from './style';

function App() {

  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((res) => res.json())
   
    .then((res) => {
      setProducts(res);
    })
    .catch((err) => console.log(err))
  }, []);

  function clearString(str){
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g, "").replace(/[^0-9a-zA-Z]/g, '');
  }

  function showProducts(produto){
    const search =  products.filter((elem) => (
      clearString(elem.name).includes(clearString(produto)) || clearString(elem.category).includes(clearString(produto))
    ));
    setFilteredProducts(search);
  }

  function addCart(produto){
    console.log(produto)
    const newProduct = currentSale.find((elem) =>{
     return elem === produto
    });
    if(newProduct === undefined){
      setCurrentSale([...currentSale, produto])
      console.log(currentSale)
    } else {
      toast.error( "Este produto já está no carrinho" )
    }
  } 

  function handleRemove(produtoRemove){
    setCurrentSale(currentSale.filter((elem) => elem !== produtoRemove))
  }

  function handleRemoveAll(){
    setCurrentSale([])
  }
  return (
    <div className="App">
      <ToastContainer />
      <Dashboard showProducts={showProducts}/>
      <StyleApp>
        <ProductsList products={filteredProducts.length > 0 ? filteredProducts : products} addCart={addCart}/>
        <Cart currentSale={currentSale} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}/>
      </StyleApp>
    </div>
  );
}

export default App;
