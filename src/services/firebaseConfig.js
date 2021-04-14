import firebase from 'firebase/app';

const firebaseConfig = () => {
  const Config = {
    apiKey: 'AIzaSyC6Xd6qy3f46xjYqyga92jGYtrez-OvXCA',
    authDomain: 'tf-cargill.firebaseapp.com',
    projectId: 'tf-cargill',
    storageBucket: 'tf-cargill.appspot.com',
    messagingSenderId: '145254485404',
    appId: '1:145254485404:web:0b4066307de2aa0b500c59',
  };

  firebase.initializeApp(Config);
};

export default firebaseConfig;
