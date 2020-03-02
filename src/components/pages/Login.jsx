import React, { useCallback, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../Auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="pt-24">
      <Logo className="mx-auto mb-4" />
      <h1 className="text-primary-900 mb-4 text-center uppercase font-bold">
        login
      </h1>
      <div className="max-w-xs mx-auto bg-white shadow py-8 px-6">
        <form className="flex flex-col mb-4" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="bg-gray-200 p-1 border rounded mb-4 border-primary-900"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="bg-gray-200 p-1 border rounded mb-8 border-primary-900"
          />
          <span className="text-right capitalize font-light text-xs text-red-600 mb-8">
            Forgot password?
          </span>
          <button className="bg-primary-900 py-2 px-6 text-white rounded w-24 mx-auto">
            Login
          </button>
        </form>
        <div className="text-center text-xs">
          <p className="text-primary-900 capitalize">Don't have an account?</p>
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
