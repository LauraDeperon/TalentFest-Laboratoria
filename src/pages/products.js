import React, { useEffect, useState } from 'react';
import getProducts from '../services/database';
import './products.css';
import Category from '../components/category';
import Footer from '../components/footer';
import Header from '../components/header';
import ProductsInformation from '../components/productsInformation/productsInformation'

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((result) => {
        result.docs.forEach((doc) => {
          setProducts((obj) => [...obj, doc.data()]);
        });
      });
    }
  }, [products]);

  return (
    <>
      <Header />
      <Category />
      <div className='App'>
        {products.map((item, index) => {
          return (
            <div key={index}>
              {/* <p>{item.image}</p> */}
              <p>{item.name + ' ' + item.brand}</p>
              <button onClick={() => ProductsInformation((item = { item }))}>
                ver
              </button>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
}





export default Products;