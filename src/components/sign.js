import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SignIn = ({ showsignin, setshowsignin }) => {
  const { token } = useParams();
  const [isSignIn, setIsSignIn] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [isForgotMode, setIsForgotMode] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/v1/router/login", { email, password });
     
      alert(res.data.message);
      setshowsignin(false);
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/v1/router/register", {
      
        firstname: name,
        email,
        password,
      });
      alert(res.data.message);
      setshowsignin(false);
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  const handleForgot = async () => {
    try {
      const res = await axios.post("http://localhost:5001/api/v1/router/forgot", { email });
      
      alert(res.data.message);
      setIsForgotMode(false);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  const handleReset = async () => {
    if (password !== confirmPassword) return setMessage("Passwords do not match");
    try {
      const res = await axios.post("http://localhost:5001/api/v1/router/reset", { token, password });
  
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Reset failed");
    }
  };

  if (!showsignin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-80 bg-white p-6 rounded-lg shadow-lg">
        <button className="absolute top-2 right-2 text-red-500 font-bold text-xl" onClick={() => setshowsignin(false)}>
          ×
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          {isResetPassword ? "Reset Password" : isForgotMode ? "Forgot Password" : isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignIn && !isResetPassword && !isForgotMode && (
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-2 p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!isForgotMode && (
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        {isResetPassword && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-2 p-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <button
          onClick={
            isResetPassword
              ? handleReset
              : isForgotMode
              ? handleForgot
              : isSignIn
              ? handleLogin
              : handleRegister
          }
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isResetPassword
            ? "Reset Password"
            : isForgotMode
            ? "Send Reset Link"
            : isSignIn
            ? "Sign In"
            : "Sign Up"}
        </button>

        {message && <p className="text-red-500 text-center mt-2">{message}</p>}

   
        {isSignIn && !isResetPassword && !isForgotMode && (
          <p
            className="text-sm text-right mt-2 text-blue-600 underline cursor-pointer"
            onClick={(handleForgot) => {
              setIsForgotMode(true);
              setMessage("");
            }}
          >
            Forgot Password?
          </p>
        )}

    
        <p
          className="text-sm text-center mt-4 text-gray-600 underline cursor-pointer"
          onClick={() => {
            if (isResetPassword || isForgotMode) {
              setIsResetPassword(false);
              setIsForgotMode(false);
              setIsSignIn(true);
            } else {
              setIsSignIn(!isSignIn);
            }
            setMessage("");
          }}
        >
          {isResetPassword || isForgotMode
            ? "Back to Sign In"
            : isSignIn
            ? "New user? Sign Up"
            : "Already registered? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
