import React from 'react';

const payments = [
  {
    reg: "01",
    user: "Premium",
    charges: 99.00,
    totalUsers: 2,
    totalAmount: 99.00
  },
  {
    reg: "02",
    user: "Premium",
    charges: 99.00,
    totalUsers: 2,
    totalAmount: 99.00
  },
  {
    reg: "03",
    user: "Premium",
    charges: 99.00,
    totalUsers: 2,
    totalAmount: 99.00
  },
  {
    reg: "04",
    user: "Premium",
    charges: 99.00,
    totalUsers: 2,
    totalAmount: 99.00
  },
];


const SubscriptionBill = () => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto mt-3'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-extrabold'>Subscription Bill Receive Payment</h1>
        <p className='bg-gray-300 p-1'>
          Feb 26, 2024 - Feb 26, 2024
        </p>
      </div>
      <div className='overflow-x-auto '>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Reg #</th>
              <th className='py-2 px-4 border-b'>User</th>
              <th className='py-2 px-4 border-b'>Charges</th>
              <th className='py-2 px-4 border-b'>Total Users</th>
              <th className='py-2 px-4 border-b'>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-b text-center'>{payment.reg}</td>
                <td className='py-2 px-4 border-b text-center'>{payment.user}</td>
                <td className='py-2 px-4 border-b text-center'>${payment.charges}</td>
                <td className='py-2 px-4 border-b text-center'>{payment.totalUsers}</td>
                <td className='py-2 px-4 border-b text-center'>${payment.totalAmount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className='py-2 pl-10 border-t  font-bold'>Total Charges:</td>
              <td className='py-2 px-4 border-t text-center font-bold'>$500</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default SubscriptionBill;
