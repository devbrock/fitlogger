import React from "react";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="pt-24">
      <Logo className="mx-auto mb-4" />
      <h1 className="text-primary-900 mb-4 text-center uppercase font-bold">
        Sign Up
      </h1>
      <div className="max-w-xs mx-auto bg-white shadow py-8 px-6">
        <form className="flex flex-col mb-4" onSubmit={onSubmit}>
          <label>Email</label>
          <input
            type="text"
            className="bg-gray-200 p-1 border rounded mb-4 border-primary-900"
          />
          <label>Password</label>
          <input
            type="password"
            className="bg-gray-200 p-1 border rounded mb-4 border-primary-900"
          />
          <label>Confirm Password</label>
          <input
            type="password"
            className="bg-gray-200 p-1 border rounded mb-8 border-primary-900"
          />
          <button className="bg-primary-900 py-2 px-3 text-white rounded w-24 mx-auto">
            Sign Up
          </button>
        </form>
        <div className="text-center text-xs">
          <p className="text-primary-900 capitalize">
            Already have an account?
          </p>
          <Link to="/login" className="text-blue-500 underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
