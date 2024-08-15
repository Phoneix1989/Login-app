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