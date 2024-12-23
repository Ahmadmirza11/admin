"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import dysonLogo from '../../app/public/images.png';
import mcdonaldsLogo from '../../app/public/images (1).png';
import wwfLogo from '../../app/public/images (2).png';
import huaweiLogo from '../../app/public/images.jpg';
import northFaceLogo from '../../app/public/images (3).png';
import admin1 from '../../app/public/bill.jpg';
import admin2 from '../../app/public/bill.jpg';
import admin3 from '../../app/public/bill.jpg';
import admin4 from '../../app/public/bill.jpg';
import admin5 from '../../app/public/bill.jpg';
import Circle from '../percentageCircle/circle';

const firms = [
  { number: '01', logo: dysonLogo, firm: 'L\'Oréal', admin: 'Lane', adminImg: admin1 },
  { number: '02', logo: mcdonaldsLogo, firm: 'General', admin: 'Richards', adminImg: admin2 },
  { number: '03', logo: wwfLogo, firm: 'McDonald\'s', admin: 'Edwards', adminImg: admin3 },
  { number: '04', logo: huaweiLogo, firm: 'Facebook', admin: 'Hawkins', adminImg: admin4 },
  { number: '05', logo: northFaceLogo, firm: 'IBM', admin: 'Warren', adminImg: admin5 }
];

const Firms = () => {
  const [percentage, setPercentage] = useState(75); // Example percentage value

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Percentage Circle Section */}
      <div className="percentage-section w-full lg:w-2/3 bg-white p-4 shadow-lg rounded-lg flex flex-col justify-center items-center">
        <Circle percentage={percentage} title="Completion" />
      </div>

      {/* Table Section */}
      <div className="table-section w-full lg:w-1/3 bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4">Registered Firms</h2>
        <table className="min-w-full bg-white border border-gray-300">
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

export default Firms;
