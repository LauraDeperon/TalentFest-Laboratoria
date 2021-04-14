import React, { useEffect, useState } from 'react';
import getProducts from '../services/database';
import './products.css';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import Chocolate from '../imagens/chocolate.png'
import Atomatado from '../imagens/tomate.png'
import Oleos from '../imagens/oleo.png'
import Todos from '../imagens/todos.png'

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
      <p className='category-title'>Categorias</p>
      <nav className='category'>

        <div className='category-info'>
          <img className='img-product-category' src={Atomatado} alt='' id='Atomatados' onClick={(e) => Filter(e)} />
          <p className='product-category'>Atomatados</p>
        </div>

        <div className='category-info'>
          <img className='img-product-category' src={Oleos} alt='' width="100" id='Óleos' onClick={(e) => Filter(e)} />
          <p className='product-category'>Óleos</p>
        </div>

        <div className='category-info'>
          <img className='img-product-category' src={Chocolate} alt='' id='Chocolates' onClick={(e) => Filter(e)} />
          <p className='product-category'>Chocolates</p>
        </div>

        <div className='category-info'>
          <img className='img-product-category' src={Todos} alt='' width="100" id='Óleos' onClick={List} />
          <p className='product-category'>Todos</p>
        </div>

      </nav>
      <div className='App'>
        {filter.map((item, index) => {
          return (
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
              <div className='product-card' key={index}>
                <img className='img-product-card' src={item.principalImage} alt='Imagem Produto' />
                <p className='text-product-card'>{item.name + ' ' + item.brand}</p>
              </div>
            </Link>
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default Products;
