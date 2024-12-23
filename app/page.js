"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import pic from '../app/public/mainlogo.png';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/authslice';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const dashboardPage = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post('https://accountingsaas.onrender.com/api/auth/admin', values);
      console.log(response.data);
      
      if (response.status === 200) {
        const { token, user } = response.data;
        dispatch(setToken(token)); // Dispatch the token to Redux
        dispatch(setUser(user)); // Dispatch the user to Redux
        toast.success('Login successful!');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response : error);
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 bg-gray-500 bg-opacity-50 p-4 md:p-8 flex flex-col justify-center">
        <Image src={pic} alt="logo" className="w-24 h-auto mb-4 md:w-32" />
        <p className="text-black text-justify md:text-left">
          This accounting firm offers streamlined, personalized financial services, specializing in tax returns, VAT, and payroll management. With a user-friendly platform, clients can track progress in real-time, communicate directly with accountants, and manage payments seamlessly. We ensure accuracy, transparency, and efficiency for all your accounting needs.
        </p>
      </div>
      <div className="flex-1 bg-white p-4 md:p-8 flex flex-col">
        <h2 className="text-black text-lg font-semibold mb-4">Login</h2>
        <p className="text-black mb-4">Login to your account</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={dashboardPage}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form className="p-3" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full p-3 rounded border"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-black mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  className="w-full p-3 rounded border"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                )}
              </div>
              <div className="text-right">
                <p className="text-[#52bdcd] cursor-pointer">Forgot Password?</p>
              </div>
              <button 
                type="submit" 
                className="bg-[#52bdcd] w-full p-2 mt-3 rounded-md text-white flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <ThreeDots
                    height="20" 
                    width="20" 
                    radius="9"
                    color="#fff" 
                    ariaLabel="three-dots-loading"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
