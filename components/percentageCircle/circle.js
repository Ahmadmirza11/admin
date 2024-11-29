import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({ percentage, title }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-lg font-semibold mb-2">{title}</p>
      <div style={{ width: 200, height: 200, position: 'relative' }}>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            textSize: '0px', // Removes percentage text
            pathTransitionDuration: 0.5,
            pathColor: '#6D80E5', // Blue color
            trailColor: '#E37882', // Pink color
            strokeWidth: 10, // Makes the circle thicker
          })}
        />
        {/* Dots with labels */}
        <div style={{ position: 'absolute', top: '50%', right: '-70px', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#6D80E5', marginRight: '8px' }}></span>
            <span>Pro</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#E37882', marginRight: '8px' }}></span>
            <span>Plus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
