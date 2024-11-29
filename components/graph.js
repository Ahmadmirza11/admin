"use client";
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import dysonLogo from '../app/public/images.png';
import mcdonaldsLogo from '../app/public/images (1).png';
import wwfLogo from '../app/public/images (2).png';
import huaweiLogo from '../app/public/images.jpg';
import northFaceLogo from '../app/public/images (3).png';
import admin1 from '../app/public/bill.jpg';
import admin2 from '../app/public/bill.jpg';
import admin3 from '../app/public/bill.jpg';
import admin4 from '../app/public/bill.jpg';
import admin5 from '../app/public/bill.jpg';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const firms = [
  { number: '01', logo: dysonLogo, firm: 'L\'Oréal', admin: 'Lane', adminImg: admin1 },
  { number: '02', logo: mcdonaldsLogo, firm: 'General', admin: 'Richards', adminImg: admin2 },
  { number: '03', logo: wwfLogo, firm: 'McDonald\'s', admin: 'Edwards', adminImg: admin3 },
  { number: '04', logo: huaweiLogo, firm: 'Facebook', admin: 'Hawkins', adminImg: admin4 },
  { number: '05', logo: northFaceLogo, firm: 'IBM', admin: 'Warren', adminImg: admin5 }
];

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Transactions',
      data: [10, 15, 12, 8, 20, 18, 22, 25, 20, 18, 24, 25],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 10,
        },
      },
    },
    title: {
      display: true,
      text: '',
    },
  },
  scales: {
    x: {
      type: 'category',
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

const Graph = () => {
  const [viewRange, setViewRange] = useState('Historic');

  const handleViewRangeChange = (range) => {
    setViewRange(range);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8 h-full">
      {/* Graph Section */}
      <div className="graph-section w-full lg:w-2/3 bg-white p-4 shadow-lg rounded-lg flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">Transactions</h2>
        <h3 className="text-gray-600 mb-4">Observe behavior in time slots</h3>
        <div className="flex justify-end gap-2 mb-4">
          <button 
            onClick={() => handleViewRangeChange('7 days')} 
            className={`px-2 py-1 border rounded ${viewRange === '7 days' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
          >
            7 days
          </button>
          <button 
            onClick={() => handleViewRangeChange('30 days')} 
            className={`px-2 py-1 border rounded ${viewRange === '30 days' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
          >
            30 days
          </button>
          <button 
            onClick={() => handleViewRangeChange('Historic')} 
            className={`px-2 py-1 border rounded ${viewRange === 'Historic' ? 'bg-gray-400 text-white' : 'bg-gray-100'}`}
          >
            Historic
          </button>
        </div>
        <div className="chart-wrapper flex-grow">
          <Line data={data} options={options} height={200} />
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section w-full lg:w-1/3 bg-white p-4 shadow-lg rounded-lg flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-center mb-4">Registered Firms</h2>
        <table className="min-w-full bg-white border border-gray-300 flex-grow">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Logo</th>
              <th className="py-2 px-4 border-b">Firms</th>
              <th className="py-2 px-4 border-b">Admin</th>
            </tr>
          </thead>
          <tbody>
            {firms.map((firm, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{firm.number}</td>
                <td className="py-2 px-4 border-b text-center">
                  <Image src={firm.logo} alt={`${firm.firm} logo`} width={30} height={30} className="mx-auto"/>
                </td>
                <td className="py-2 px-4 border-b text-center">{firm.firm}</td>
                <td className="py-2 px-4 border-b text-center">
                  <Image src={firm.adminImg} alt={`${firm.admin} pic`} width={30} height={30} className="rounded-full mx-auto"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Graph;
