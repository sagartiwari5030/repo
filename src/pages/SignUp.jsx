import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signInUser } = useUser();

  const navigate = useNavigate();

  const SingUpAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const body = {
        name: name,
        email: email,
        password: password,
        appType: "music"
      };
      const headers = {
        "Content-Type": "application/json",
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.post(`${url}/api/v1/user/signup`, body, { headers });

      // Do something with the response
      console.log(response.data);

      let result = response.data;

      if (result.status == "success") {
        localStorage.setItem("token", response.data.token);
        signInUser({ status: response.data.status, token: response.data.token });
        navigate('/');
      }
      if (result.status == "fail") {
        alert(result.message);
        navigate('/login');
      }
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
        <h1 className="text-2xl font-bold text-black mb-6">Sign up to start listening</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
            required
          />
        </div>

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

        <button onClick={SingUpAPI}
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Submit
        </button>

      </div>
    </div>
  );
};

export default SignUp;