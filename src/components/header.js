import Logo from '../imagens/logo.png';
import Close from '../imagens/close.png';
import Modal from 'react-modal';
import { useState } from 'react';
Modal.setAppElement('#root')

Modal.setAppElement('#root')

Modal.setAppElement('#root')

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function closeModalSobre() {
    setModalIsOpen(false);
  }

  return (
    <div className='app'>
      <header className='app-header'>
        <nav className="navbar">
          <img src={Logo} alt='' width="100" />
          <button className='btn-about' onClick={() => setModalIsOpen(true)}>Sobre</button>
          <Modal className='modal' isOpen={modalIsOpen}
            onRequestClose={closeModalSobre}>
            <button className='btn-close' onClick={closeModalSobre}><img className='img-close' src={Close} alt='' /></button>
            <p>A Cargill oferece serviços e produtos alimentícios, agrícolas, financeiros e industriais ao mundo.
            Juntamente com produtores rurais, clientes, governos e comunidades, ajudamos as pessoas a prosperar com a aplicação de nossas ideias há mais de 155 anos. Temos 155.000 funcionários em 70 países, que estão comprometidos a fornecer alimentos ao mundo de uma forma responsável, reduzindo o impacto ambiental e melhorando as comunidades onde atuamos.
            </p>
            <button onClick={closeModalSobre}><img src={Close} alt='' /></button>
          </Modal>
        </nav>
      </header>
    </div>
  );
}

export default Header;
