import './products.css';

import Category from '../components/category'
import Footer from '../components/footer'
import Header from '../components/header'
import getProducts from '../services/database'


function Products() {
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
