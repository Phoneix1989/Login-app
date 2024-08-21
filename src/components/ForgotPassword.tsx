import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log('Forgot Password:', data);
    // Handle forgot password logic here
    navigate('/reset-password');
  };

  return (
    <div className=" flex bg-[url('/src/assets/moon.jpg')] bg-cover bg-center h-screen p-8 justify-center sm:justify-start">
          <div className='flex ml-14'>
            <img src="src/assets/lgp.png" alt="lgp.png" className="h-12 w-12"/>
            <h1 className="ml-3 mt-6 text-white font-extrabold text-xl">Planet</h1>
          </div>
        <div className="mr-10 flex items-center justify-center rounded-lg">
          <span className="absolute bottom-36 left-20 text-white font-extrabold text-5xl hidden sm:block">Exploring <br></br>the universe</span>
        </div>
        <div className='absolute right-10 top-36 flex justify-end sm:justify-center'>
          <div className= "bg-green-50 p-16 rounded-lg shadow-lg h-96 w-96">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white rounded-md py-2 px-4 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
  );
};

export default ForgotPassword;