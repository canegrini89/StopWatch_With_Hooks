import React from 'react';

const LapList = ({ laps }) => {
  return (
    <ol className='lap_list'>
      {laps.map((lap, index) => {
        return (
          <li key={index} className='lap'>
            <span>lap {index + 1}</span> <span>{lap.toFixed(2)}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default LapList;
