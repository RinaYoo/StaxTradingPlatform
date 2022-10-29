import React, { useContext } from "react";
import logo from "../images/stax-img.jpg";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed In
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);
        navigate.push("/home");
        alert("You have succesfully logged in!");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const { dispatch } = useContext(AuthContext);

  return (
    <div className="login">
      <h1>Welcome to Our Trading Platform!</h1>
      <p>Please Login to Use Our Platform</p>
      <section className="login-container">
        <img className="logo-img" src={logo} alt="Stax" />
        <form onSubmit={handleLogin} className="login-section">
          <h2>LOGIN</h2>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <span>Wrong email or password!</span>}
          <p>
            Don't have an account? Click <a href="signup">here</a> to register
          </p>
        </form>
      </section>
    </div>
  );
}

export default Login;
