import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosclient from "../utils/axiosclient";
import Snackbar from "../components/snackbar/snackbar";

const RegJoin = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

  const handlingChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlingSubmitForm = (event) => {
    event.preventDefault();
    setError("");
    setShowErrorSnackbar(false);
    axiosclient
      .post("/auth/register", data)
      .then((response) => {
        setSuccess(response.data.success);
        setShowSuccessSnackbar(true);
      })
      .catch((err) => {
        setError(`Error: ${err.response.data.error || "Login failed"}`);
        setShowErrorSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setShowErrorSnackbar(false);
    setShowSuccessSnackbar(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 -mt-12">
        <h1 className="text-4xl font-bold text-center text-gray-700 -ml-0 md:-ml-7 pb-1 mb-4">
          Sign Up
        </h1>
        <form
          className="flex flex-col justify-center space-y-6"
          onSubmit={handlingSubmitForm}
        >
          <div className="w-full space-y-4">
            <input
              name="username"
              type="text"
              value={data.username}
              onChange={handlingChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handlingChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={handlingChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Continue
          </button>
          <Link to="/login">
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <span className="text-purple-600 hover:underline cursor-pointer">
                Login here
              </span>
              .
            </p>
          </Link>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="agree"
              className="w-4 h-4 text-purple-600 focus:ring-0 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="ml-2 text-gray-600">
              By continuing, I agree to the{" "}
              <span className="text-purple-600 hover:underline cursor-pointer">
                terms of use
              </span>{" "}
              &{" "}
              <span className="text-purple-600 hover:underline cursor-pointer">
                privacy policy
              </span>
              .
            </label>
          </div>
        </form>
        <Snackbar type="error" message={error} onClose={handleCloseSnackbar} />
        <Snackbar
          type="success"
          message={success}
          onClose={handleCloseSnackbar}
        />
      </div>
    </div>
  );
};

export default RegJoin;
