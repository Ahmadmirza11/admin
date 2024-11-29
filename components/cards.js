import React from 'react';

export const Cards = ({ containerStyle = '' }) => {
  const cardInfo = [
    { title: 'Total firms', value: '45', color: '#ffeff18c' },
    { title: 'Active Firm', value: '25', color: '#ffeff18c' },
    { title: 'Inactive Firm', value: '20', color: '#EEFFEA8C' },
    { title: 'Total Packages', value: '07', color: '#EAFAFF8C' },
  ];

  return (
    <div className={`flex justify-center items-center bg-white shadow-lg p-5 rounded-md ${containerStyle}`}>
      <div className="flex justify-around w-full">
        {cardInfo.map((info, index) => (
          <div
            key={index}
            className="border w-1/4 h-24 flex flex-col justify-center items-center rounded-md mx-2"
            style={{ backgroundColor: info.color, borderColor: info.color }}
          >
            <p className="text-lg">{info.title}</p>
            <p className="text-md">{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
