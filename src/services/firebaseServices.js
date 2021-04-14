import firebase from 'firebase/app';
import 'firebase/firestore';

const getProducts = () => {
  const db = firebase.firestore();
  return db.collection('products').get();
};

export default getProducts;
