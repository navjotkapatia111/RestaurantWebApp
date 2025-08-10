import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // const res = await axios.post("http://localhost:5001/api/v1/router/reset", {
      const res = await axios.post("restaurantwebapp-production.up.railway.app/api/v1/router/reset", {
        token,
        password,
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border mb-3 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {message && (
          <p className="text-center mt-3 text-red-500 font-semibold">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
