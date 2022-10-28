import React from "react";
import logo from "../images/stax-img.jpg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    // e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        setError(true)
      });
  };

  return (
    <div>
      <section className="login-container">
        <img className="logo-img" src={logo} alt="Stax" />
        <form onSubmit={handleLogin} className="login-section">
          <h1>LOGIN</h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <span>Wrong email or password!</span>}
          <p>
            Don't have an account? Click <a href="signup.js">here</a> to
            register
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
