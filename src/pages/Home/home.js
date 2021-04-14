import React from 'react';
import './home.css';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import ProductsList from '../../components/ProductsList/productsList';

function Home() {

  return (
    <>
      <Header />
      <ProductsList />
      <Footer />
    </>
  );
}

export default Home;
