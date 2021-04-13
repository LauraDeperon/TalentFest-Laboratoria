import React, { useEffect, useState } from 'react';
import getProducts from "../services/database"
import './products.css';
import Category from '../components/category'
import Footer from '../components/footer'
import Header from '../components/header'

function Products() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    
    getProducts().then((result) => {
      result.docs.forEach((doc) => {
         setProducts(obj => [...obj, doc.data()]);
            })
      
    })
    console.log(products)
  }, [])

console.log(products)
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => getProducts()}></button>
      </header>
      <Header/>
      <Category/>
      <Footer/>
    </div>
  );
}





export default Products;