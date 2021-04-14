import React, { useEffect, useState } from 'react';
import getProducts from '../../services/firebaseServices';
import './productsList.css';
import { Link } from 'react-router-dom';
import Chocolate from '../../images/chocolate.png';
import Atomatado from '../../images/tomate.png';
import Oleos from '../../images/oleo.png';

function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      List();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function List() {
    setProducts([]);
    setFilter([]);
    getProducts().then((result) => {
      result.docs.forEach((doc) => {
        setProducts((obj) => [...obj, doc.data()]);
        setFilter((obj) => [...obj, doc.data()]);
      });
    });
  }

  function Filter(e) {
    const filtered = products.filter((item) => item.category === e.target.id);
    setFilter(filtered);
  }

  return (
    <>
      <div className='Category'>
        <nav>
          <span>
            <img
              src={Atomatado}
              alt=''
              width='100'
              id='Atomatados'
              onClick={(e) => Filter(e)}
            />
            <p>Atomatados</p>
          </span>
          <span>
            <img
              src={Chocolate}
              alt=''
              width='100'
              id='Chocolates'
              onClick={(e) => Filter(e)}
            />
            <p>Chocolates</p>
          </span>
          <span>
            <img
              src={Oleos}
              alt=''
              width='100'
              id='Óleos'
              onClick={(e) => Filter(e)}
            />
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
      </div>
    </>
  );
}

export default Products;
