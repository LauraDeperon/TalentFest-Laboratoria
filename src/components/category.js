import Chocolate from '../imagens/chocolate.png'
import Atomatado from '../imagens/tomate.png'
import Oleos from '../imagens/oleo.png'
function Category() {
    return (
      <div className='Category'>
          <nav>
              <span>
              <img src={Atomatado} alt='' width="100" />
                  <p>Atomatados</p>
                </span>
                <span>
                <img src={Chocolate} alt='' width="100" />
                  <p>Chocolates</p>
                </span>
                <span>
                <img src={Oleos} alt='' width="100" />
                  <p>Óleos</p>
                </span>
          </nav>
      </div>
    );
  }
  
  export default Category;