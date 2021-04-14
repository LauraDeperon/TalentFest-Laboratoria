import React from 'react';
import './productsInformation.css';
import Modal from 'react-modal';
import { useState } from 'react';


function ProductsInformation({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  function closeModalInformation() {
    setModalIsOpen(false);
  }

  return (
    <div className='App'>
      <header className='App-information'>
        <nav className="navbar">
          {/* <button onClick={() => setModalIsOpen(true)}>Ver</button> */}
          <Modal isOpen={modalIsOpen}
            onRequestClose={closeModalInformation}>
            <h1>{item.name}</h1>
            <p>{item.brand}</p>
        <p>{item.description}</p>
        {item.processes.map((process) => console.log(process))}
        <p>{item.recipe}</p>
            <button onClick={closeModalInformation}></button>
          </Modal>
        </nav>
      </header>
    </div>
  );
}

export default ProductsInformation;


  