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
    <div className=" flex bg-[url('/src/assets/moon.jpg')] bg-cover bg-center h-screen p-8">
      <div  className=" bg-black w-full flex flex-col-2 justify-center rounded-lg p-10 shadow-2xl absolute inset-y-0 right-0 bg-opacity-50">
        <div className="w-1/2 mr-10 flex items-center justify-center rounded-lg">
          <div className='absolute top-28 left-20 flex'>
          <img src="src/assets/lgp.png" alt="lgp.png" className="h-12 w-12"/>
          <h1 className="ml-3 mt-6 text-blue-500 font-extrabold text-xl">Planet</h1>
          </div>
            <span className="absolute bottom-28 left-20 text-blue-500 font-extrabold text-5xl ">Exploring <br></br>the universe</span>
          </div>
              <div className="bg-gray-400 p-8 rounded shadow-md">
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