import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to home page
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user, login and redirect to homepage
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <h3 className="login__phrase">Ecommerce Website</h3>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email:</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password:</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />

          <button type="submit" onClick={signIn} className="login__signInBtn">
            sign in
          </button>
          <button onClick={register} className="login__registerBtn">
            create your own account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
