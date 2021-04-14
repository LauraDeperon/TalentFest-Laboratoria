import React, { useEffect, useState } from 'react';
import getProducts from '../services/database';
import './products.css';
import Category from '../components/category';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';

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
              <img src={item.principalImage} alt='Imagem Produto' />
              <p>{item.name + ' ' + item.brand}</p>
              <Link
                to='/product'
                onClick={() => {
                  localStorage.setItem('itemName', item.name);
                  localStorage.setItem('itemBrand', item.brand);
                  localStorage.setItem('itemDescription', item.description);
                  localStorage.setItem('itemRecipe', item.recipe);
                  localStorage.setItem('itemImage', item.secondImage);
                  localStorage.setItem(
                    'itemProcesses',
                    JSON.stringify(item.processes)
                  );
                }}
              >
                + Saiba Mais
              </Link>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default Products;
