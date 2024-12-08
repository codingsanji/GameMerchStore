import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosclient from "../utils/axiosclient";
import Snackbar from "../components/snackbar/snackbar";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  const handlingChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlingSubmitForm = (event) => {
    event.preventDefault();
    setError("");
    setShowSnackbar(false);
    axiosclient
      .post("/auth/login", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
        navigate('/');
      })
      .catch((err) => {
        setError(`Error: ${err.response.data.error || "Login failed"}`);
        setShowSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 -mt-12">
        <h1 className="text-4xl font-bold text-center text-gray-700 -ml-0 md:-ml-7 pb-1 mb-4">
          Login
        </h1>
        <form
          onSubmit={handlingSubmitForm}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="w-full space-y-4">
            <input
              name="email"
              type="email"
              value={data.email}
              onChange={handlingChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              name="password"
              type="password"
              value={data.password}
              onChange={handlingChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-600 text-white font-bold py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            Login
          </button>
          <Link to="/signup">
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Sign up here
              </span>
              .
            </p>
          </Link>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-indigo-600 focus:ring-0 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <span className="text-indigo-600 hover:underline cursor-pointer">
              Forgot your password?
            </span>
          </div>
        </form>
        <Snackbar type="error" message={error} onClose={handleCloseSnackbar} />
      </div>
    </div>
  );
};

export default Login;