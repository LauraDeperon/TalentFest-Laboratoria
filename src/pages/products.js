import React, { useEffect, useState } from 'react';
import getProducts from "../services/database"
import './products.css';
import Category from '../components/category'
import Footer from '../components/footer'
import Header from '../components/header'




function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0){
      getProducts().then((result) => {
        result.docs.forEach((doc) => {
          setProducts(obj => [...obj, doc.data()]);
        })
      })
    }
  }, [products])

  return (
    <>
      <Header />
      <Category />
      <div className='App'>
        <h1>Olá</h1>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.image}</p>
              {/* <p>{item.name}</p> */}
              {/* <button onClick={() => ProductsInformation item={item}}>ver</button> */}
            </div>
          )
        })}
        <Footer />
      </div>
    </>
  )
}





export default Products;