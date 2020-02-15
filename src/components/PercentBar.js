import React from 'react';

const PercentBar = ({ progress }) => {
  return (
    <div className="percent-bar">
      <div className="progress" style={{width: `${progress}%`}}>
        {progress}%
      </div>
    </div>
  )
}

export default PercentBar;
