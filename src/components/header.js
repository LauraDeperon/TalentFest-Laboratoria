import Logo from '../imagens/logo.png';
import Close from '../imagens/close.png';
import Modal from 'react-modal';
import { useState } from 'react';
Modal.setAppElement('#root');

Modal.setAppElement('#root');

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function closeModalSobre() {
    setModalIsOpen(false);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='navbar'>
          <img src={Logo} alt='' width='100' />
          <button onClick={() => setModalIsOpen(true)}>Sobre</button>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModalSobre}>
            <h1>Cargill</h1>
            <h3>
              A Cargill oferece serviços e produtos alimentícios, agrícolas,
              financeiros e industriais ao mundo. Juntamente com produtores
              rurais, clientes, governos e comunidades, ajudamos as pessoas a
              prosperar com a aplicação de nossas ideias há mais de 155 anos.
              Temos 155.000 funcionários em 70 países, que estão comprometidos a
              fornecer alimentos ao mundo de uma forma responsável, reduzindo o
              impacto ambiental e melhorando as comunidades onde atuamos.
            </h3>
            <button onClick={closeModalSobre}>
              <img src={Close} alt='' />
            </button>
          </Modal>
        </nav>
      </header>
    </div>
  );
}

export default Header;
