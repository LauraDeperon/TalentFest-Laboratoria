import React from 'react';

function productsInformation({ item }) {
  return (
    <>
      <div className='App'>
        <p>{item.name}</p>
        <p>{item.brand}</p>
        <p>{item.description}</p>
        {item.processes.map((process) => console.log(process))}
        <p>{item.recipe}</p>
      </div>
    </>
  );
}

export default productsInformation;
