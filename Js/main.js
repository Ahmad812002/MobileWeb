// main.js
import { SignUp } from "./auth/SignUp.js";
import { Login } from "./auth/Login.js";

document.getElementById("signUpBtn").addEventListener("click", SignUp);
document.getElementById("loginBtn").addEventListener("click", Login);
