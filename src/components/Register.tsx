import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log('Register:', data);
    // Handle registration logic here
    navigate('/otp');
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
                <h2 className="text-2xl font-bold mb-4">Register</h2>
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
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      {...register('confirmPassword', { 
                        required: 'Please confirm your password',
                        validate: (value) => value === watch('password') || 'Passwords do not match'
                      })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white rounded-md py-2 px-4 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Register
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/" className="font-medium text-blue-700 hover:text-blue-500">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
  );
};

export default Register;