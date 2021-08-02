import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD6iXcSQw360zXYS0zg9zvMUlcU4kJhXJU",
    authDomain: "your-channel-d0f91.firebaseapp.com",
    projectId: "your-channel-d0f91",
    storageBucket: "your-channel-d0f91.appspot.com",
    messagingSenderId: "377613249948",
    appId: "1:377613249948:web:50bed8d91d5d1eedcd2c59",
    measurementId: "G-ZQ5SKB3MV8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;