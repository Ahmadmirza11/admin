import Image from 'next/image'
import React from 'react'
import pic from "../public/cup.png"
import { TiTick } from "react-icons/ti";
import CreatePackage from '@/components/createPackage';

const data = [
    {
        title: "payroll tax management",
        price: "$49.99 per filing",
        description: "Perfect for freelancers and self-employed professionals to file their annual tax returns efficiently",
        features: [
            "Step-by-step guidance",
            "Automated calculations",
            "Secure online submission",
            "Customer support"
        ]
    },
    {
        title: "payroll tax management",
        price: "$49.99 per filing",
        description: "Perfect for freelancers and self-employed professionals to file their annual tax returns efficiently",
        features: [
            "Step-by-step guidance",
            "Automated calculations",
            "Secure online submission",
            "Customer support"
        ]
    },
    {
        title: "payroll tax management",
        price: "$49.99 per filing",
        description: "Perfect for freelancers and self-employed professionals to file their annual tax returns efficiently",
        features: [
            "Step-by-step guidance",
            "Automated calculations",
            "Secure online submission",
            "Customer support"
        ]
    }
];

const Packages = () => {
  return (
    <div>
        <div className='bg-white w-full rounded-xl p-6'>
            <div>
                <h1 className='font-bold text-2xl mb-2'>Present Packages</h1>
                <p className='text-gray-500'>Using basic skills you can improve your business stuff with Around</p>
            </div>
            <div className='flex justify-between items-center space-x-4 mt-4'>
                {data.map((item, index) => (
                    <div key={index} className='border rounded-xl p-7 w-1/3'>
                        <div className='flex space-x-1 justify-center items-center mb-4'>
                            <Image src={pic} alt='logo' className='text-blue-400 w-12 h-12 bg-blue-500 rounded-lg p-1' />
                            <p className='text-xl font-bold text-center'>{item.title}</p>
                        </div>
                        <p className='text-2xl text-gray-500 mt-4 text-center'>{item.price}</p>
                        <p className='text-center p-1 text-gray-500'>{item.description}</p>
                        <div className='mt-3'>
                            {item.features.map((feature, idx) => (
                                <div key={idx} className='flex items-center space-x-2 border-b mb-4'>
                                    <TiTick size={20} className='text-blue-400'/>
                                    <p className='text-gray-500'>{feature}</p>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center mt-4'>
                            <button className='bg-blue-500 text-white rounded-lg px-4 py-2'>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <CreatePackage/>
    </div>
  );
}

export default Packages;
