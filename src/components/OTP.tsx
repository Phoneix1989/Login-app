import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  otp: string;
};

const OTP: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log('OTP:', data);
    // Handle OTP verification logic here
    navigate('/');
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
                <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                      OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      {...register('otp', { required: 'OTP is required', pattern: { value: /^[0-9]{6}$/, message: 'OTP must be 6 digits' } })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.otp && <p className="mt-1 text-sm text-red-600">{errors.otp.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Verify OTP
                  </button>
                </form>
              </div>
            </div>
          </div>
  );
};

export default OTP;