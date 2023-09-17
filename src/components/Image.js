import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Image = ({ imageUrl,percentage }) => {
  const customStyles = {
    path: {
      
      stroke: 'green',
    },
    trail: {
      
      stroke: 'lightgreen',
    },
    text:{
      fill:"green"
    }
  };
  const customStyles2 = {
    path: {
      
      stroke: 'red',
    },
    trail: {
      
      stroke: 'lightred',
    },
    text:{
      fill:"red"
    }
  };

  const selectedStyles = percentage < 90 ? customStyles2 : customStyles;
  return (
    <div className='screenshot'>
      <img src={imageUrl} alt="API" className='imaging' />
  
      <div  className="circle" style={{ width: 150, height: 150 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={selectedStyles} />
      <p className='circlet'>On Page Score</p>
      </div>
    </div>
  );
};

export default Image;