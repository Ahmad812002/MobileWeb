import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "../firebase/firebase.js";  // adjust path as needed



export function SignUp () {
    const email = document.getElementById("singUpNameInput").value;
    const password = document.getElementById("singUpPasswordInput").value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Sign up successful!");
        console.log("Signed up user:", user);
      })
      .catch((error) => {
        alert(error.message);
        console.error("Sign up error:", error);
      });
  };