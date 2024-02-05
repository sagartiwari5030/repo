import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] =useState('')

  const LoginAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const body = {
        email: email,
        password: password,
        appType: "music"
      };
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.post(`${url}/api/v1/user/login`, body, { headers });

      // Do something with the response
      console.log(response.data);

      // Set loading to false, indicating that the data has been fetched
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h1 className="text-2xl font-bold text-black mb-6">Log in to start listening</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>
        <div className="mb-4 text-right">
          <Link to="/updatepass">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            Forgot Password?
          </button>
          </Link>
        </div>
        <div className="mb-6 mt-0 ml-2 text-left">
          <Link to="/signup">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            Sign Up
          </button>
          </Link>
        </div>
          <button onClick={LoginAPI}
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
      </div>
    </div>
  );
};

export default Login;