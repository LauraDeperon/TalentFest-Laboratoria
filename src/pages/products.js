import './products.css';
import Category from '../components/category'
import Footer from '../components/footer'
import Header from '../components/header'


function Products() {
  return (
    <div className='App'>
      <Header/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default Products;
