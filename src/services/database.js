import * as firebase from 'firebase/app';
import 'firebase/firestore';

const getProducts = () => {
  return firebase.firestore().db.colllection('products').get();
};

export default getProducts();
