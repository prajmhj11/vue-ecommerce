import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD13Em062YIWyU8ABDBgM2i-VbCi5ha1ZU",
    authDomain: "vue-ecommerce-f4f49.firebaseapp.com",
    databaseURL: "https://vue-ecommerce-f4f49.firebaseio.com",
    projectId: "vue-ecommerce-f4f49",
    storageBucket: "vue-ecommerce-f4f49.appspot.com",
    messagingSenderId: "46561670677",
    appId: "1:46561670677:web:532de173a649253cd8401c",
    measurementId: "G-C22NFX7D4S"
  };

export const fb = firebase.initializeApp(firebaseConfig);