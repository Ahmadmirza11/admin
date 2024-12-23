import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({ percentage, title }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">{title}</p>
      <div style={{ width: 200, height: 300, position: 'relative' }}> {/* Increased height */}
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: '16px', // Displays percentage text
            pathTransitionDuration: 0.5,
            pathColor: '#4b9cd3', // Blue color
            textColor: '#000', // Text color
            trailColor: '#d6d6d6', // Gray color
            backgroundColor: '#f3f4f6', // Background color
            strokeWidth: 15, // Increased stroke width for height effect
          })}
        />
        {/* Dots with labels */}
        <div style={{ position: 'absolute', top: '50%', right: '-100px', transform: 'translateY(-50%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#4b9cd3', marginRight: '8px' }}></span>
            <span>Pro</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#d6d6d6', marginRight: '8px' }}></span>
            <span>Plus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
