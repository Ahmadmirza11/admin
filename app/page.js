"use client";
import Image from 'next/image';
import React from 'react';
import pic from '../app/public/mainlogo.png';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const dashboardPage = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    router.push('/dashboard');  // Navigate to the dashboard page
  };

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
        <form className="p-3" onSubmit={dashboardPage}>
          <div className="mb-4">
            <label className="block text-black mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded border"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="w-full p-3 rounded border"
            />
          </div>
          <div className="text-right">
            <p className="text-[#52bdcd] cursor-pointer">Forgot Password?</p>
          </div>
          <button className="bg-[#52bdcd] w-full p-2 mt-3 rounded-md text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
