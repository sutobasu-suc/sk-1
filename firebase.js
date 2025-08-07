// Firebase互換SDKを使って初期化（非モジュール用）
const firebaseConfig = {
  apiKey: "AIzaSyDXOYmTbJLXoWJURWyI-3S99M3yUZESE1Y",
  authDomain: "shinoyama-9c54f.firebaseapp.com",
  databaseURL: "https://shinoyama-9c54f-default-rtdb.firebaseio.com",
  projectId: "shinoyama-9c54f",
  storageBucket: "shinoyama-9c54f.firebasestorage.app",
  messagingSenderId: "868278773303",
  appId: "1:868278773303:web:96f1f07cb2b2681cecc1b2",
  measurementId: "G-4ZV6GXKWS8"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
