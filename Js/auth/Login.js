import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "../firebase/firebase.js";



export function Login () {
    const email = document.getElementById("loginNameInput").value;
    const password = document.getElementById("loginPasswordInput").value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful!");
        console.log("Logged in user:", user);
        window.location.href = "html/dashboard.html";
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
        console.error("Login error:", error);
      });
  };
