importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyB7Ufm4hc2e-s0My8-7QNsS2-DY7hnEXxA",
    authDomain: "habit-tracker-81f6e.firebaseapp.com",
    databaseURL: "https://habit-tracker-81f6e.firebaseio.com",
    projectId: "habit-tracker-81f6e",
    storageBucket: "habit-tracker-81f6e.appspot.com",
    messagingSenderId: "1097735799027",
    appId: "1:1097735799027:web:442429aab0faa823b2f786"
});
 
const messaging = firebase.messaging();