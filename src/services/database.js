import db from '../index';

const getProducts = () => {
  return db.collection('products').get();
}

export default getProducts;
