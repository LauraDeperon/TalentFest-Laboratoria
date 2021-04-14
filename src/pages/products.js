import React, { useEffect, useState } from 'react';
import getProducts from '../services/database';
import './products.css';
import Footer from '../components/footer';
import Header from '../components/header';
import productsInformation from '../components/productsInformation/productsInformation';
import Chocolate from '../imagens/chocolate.png'
import Atomatado from '../imagens/tomate.png'
import Oleos from '../imagens/oleo.png'

function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      List()
    }
  }, []);

  function List() {
    setProducts([])
    setFilter([])
    getProducts().then((result) => {
      result.docs.forEach((doc) => {
        setProducts((obj) => [...obj, doc.data()]);
        setFilter((obj) => [...obj, doc.data()]);
      });
    });
  };

  function Filter(e) {
    const filtered = products.filter(item => item.category === e.target.id)
    setFilter(filtered)
  }

  return (
    <>
      <Header />
      <div className='Category'>
        <nav>
          <span>
            <img src={Atomatado} alt='' width="100" id='Atomatados' onClick={(e) => Filter(e)} />
            <p>Atomatados</p>
          </span>
          <span>
            <img src={Chocolate} alt='' width="100" id='Chocolates' onClick={(e) => Filter(e)} />
            <p>Chocolates</p>
          </span>
          <span>
            <img src={Oleos} alt='' width="100" id='Óleos' onClick={(e) => Filter(e)} />
            <p>Óleos</p>
          </span>
          <button onClick={List}>Limpar</button>
        </nav>
      </div>
      <div className='App'>
        {filter.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name + ' ' + item.brand}</p>
              <button onClick={() => productsInformation((item = { item }))}>
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
