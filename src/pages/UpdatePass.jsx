import React, { useState } from 'react';
import axios from 'axios';

const Updatepass = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordCurrent, setPassword] = useState('');
  const [pass, setPass] = useState('');

  const UpdateAPI = async () => {
    try {
      const url = "https://academics.newtonschool.co";
      const body = {
        name:name,
        email: email,
        passwordCurrent: passwordCurrent,
        password: pass,
        appType: "music"
      };
      const headers = {
        "Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdhYzg4MjBkOTk4MTI2ZmI3NDM2YiIsImlhdCI6MTcwNjUzNjA3MywiZXhwIjoxNzM4MDcyMDczfQ.gFhj4OTj4yDn8kjcXekHLZ5JZpvSMMjZyE3k8APfDUQ ',
        "projectId": "f104bi07c490"
      };

      // Make a POST request to your API endpoint
      const response = await axios.patch(`${url}/api/v1/user/updateMyPassword`, body, { headers });

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
        <h1 className="text-2xl font-bold text-black mb-6">Update Your Password</h1>
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
             Current Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={ passwordCurrent}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">
             New Password
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-green-400"
              required
            />
          </div>

          <button onClick={UpdateAPI}
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Submit
          </button>
        
      </div>
    </div>
  );
};

export default Updatepass;