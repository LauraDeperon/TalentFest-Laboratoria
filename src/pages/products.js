import React, { useEffect, useState } from 'react';
import getProducts from "../services/database"
import './products.css';

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
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>Olá</h1>
          <button onClick={() => {console.log(getProducts())}}>click</button>
{/*           {products.(function (item) {
            return (
              <div key={item.id}>
              </div>
            )
          })} */}
        </header>
      </div>
    </>
  )

}





export default Products;