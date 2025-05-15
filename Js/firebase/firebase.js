import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js"; //allows you to start logging events to monitor user engagement and app usage.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDIHqbYGSwpGRtjiQlAOxlC-1N03h4PKu8",
    authDomain: "mobileweb-829b4.firebaseapp.com",
    databaseURL: "https://mobileweb-829b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mobileweb-829b4",
    storageBucket: "mobileweb-829b4.firebasestorage.app",
    messagingSenderId: "464188043136",
    appId: "1:464188043136:web:705be1333bbd20ab7c9b65",
    measurementId: "G-BQ60FP0H52"
  };


  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    export {auth}


    
    export function checkFirebaseConnection () {
        try {
          // Log a message to the console to confirm the connection
          console.log("Firebase is successfully connected!");
          alert("Firebase is connected!");
        } catch (error) {
          console.error("Error connecting to Firebase: ", error);
          alert("Failed to connect to Firebase");
        }
      };





