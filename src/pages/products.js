import React, { useEffect, useState } from 'react';
import getProducts from '../services/database';
import './products.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';
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
