import Logo from '../imagens/logo.png';
function Header() {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav>
          <img src={Logo} alt='' width="100"  />
          <p>Sobre</p>
          <p>Fale conosco</p>
          </nav>
        </header>
      </div>
    );
  }
  
  export default Header;
  