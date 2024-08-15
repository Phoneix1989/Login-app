import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
    console.log('Reset Password:', password, confirmPassword);
  };

  return (
    <div className=" flex bg-[url('/src/assets/moon.jpg')] bg-cover bg-center h-screen p-8">
      <div  className=" bg-black w-full flex flex-col-2 justify-center rounded-lg p-10 shadow-2xl absolute inset-y-0 right-0 bg-opacity-50">
        <div className="w-1/2 mr-10 flex items-center justify-center rounded-lg">
          <div className='absolute top-28 left-20 flex'>
          <img src="src/assets/lgp.png" alt="lgp.png" className="h-12 w-12"/>
          <h1 className="ml-3 mt-6 text-white font-extrabold text-xl">Planet</h1>
          </div>
            <span className="absolute bottom-28 left-20 text-white font-extrabold text-5xl ">Exploring <br></br>the universe</span>
          </div>
              <div className="bg-green-50 p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
  );
};

export default ResetPassword;