import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Image = ({ imageUrl,percentage }) => {
  return (
    <div className='screenshot'>
      <img src={imageUrl} alt="API" className='imagewa' />
  
      <div  className="circle" style={{ width: 150, height: 150 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      <p className='circlet'>On Page Score</p>
      </div>
    </div>
  );
};

export default Image;