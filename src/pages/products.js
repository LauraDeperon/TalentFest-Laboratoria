import './products.css';
import getProducts from '../services/database'


function Products() {
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => getProducts()}></button>
      </header>
    </div>
  );
}

export default Products;
