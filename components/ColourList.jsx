import React from 'react';
import Chip from './Chip';

const ChipList = ({ data, valparam, onChipClick }) => {
  return (
    <div className='block mb-4'>
      {data.map((post) => (
        <Chip
          key={post} // Make sure to add a unique key for each chip
          text={post}
          value={post}
          selected={valparam === post}
          onChipClick={onChipClick}
        />
      ))}
    </div>
  );
};

export default ChipList;
