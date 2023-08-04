import React from 'react'
import Chip from './Chip'

const ChipList = ({ data,value }) => {
    const chips = [];
  
    for (const post of data) {
      chips.push(post);
    }
  
    return (
      <div className='block mb-4'>
        {
          chips.map(post => (
            <Chip
              text={post}
              value={value}
            />
          ))}
      </div>
    );
  };

export default ChipList
