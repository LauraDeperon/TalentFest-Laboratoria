import Chocolate from '../imagens/chocolate.png'
import Atomatado from '../imagens/tomate.png'
import Oleos from '../imagens/oleo.png'
function Category() {
  return (
    <>
      <header>
        <p className='category-title'>Categorias</p>
      </header>
      <nav className='category'>
        <div className='category-info'>
          <img className='img-product-category' src={Atomatado} alt='' />
          <p className='product-category'>Atomatados</p>
        </div>
        <div className='category-info'>
          <img className='img-product-category' src={Chocolate} alt='' />
          <p className='product-category'>Chocolates</p>
        </div>
        <div className='category-info'>
          <img className='img-product-category' src={Oleos} alt='' />
          <p className='product-category'>Óleos de cozinha</p>
        </div>
      </nav>
    </>
  );
}

export default Category;