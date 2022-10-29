import React, { useContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [reward, setReward] = useState("0");


  let navigate = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (age >= 18) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const ref = doc(db, "users", user.uid);
        const docRef = setDoc(ref, { email, name, age, reward })
          .then((re) => {
            alert("You have succesfully registered");
          })
          .catch((e) => {
            setError(true);
            console.log(e.message);
          });
        navigate.push("/");
      })
      .catch((error) => {
        setError(true);
      });
    } else {
      alert("Your age should be 18 or above!");
    }
  };

  const { dispatch } = useContext(AuthContext);

  return (
    <div>
      <section className="login-container signup-height">
        <form onSubmit={handleSignUp} className="login-section">
          <h1>REGISTER</h1>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p>
            Have an account? Click <a href="signup">here</a> to login
          </p>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
