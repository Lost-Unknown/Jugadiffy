import React from 'react';

const Chip = ({ text, value, selected, onChipClick }) => {
  return (
    <button
      type='button'
      value={value}
      onClick={() => onChipClick(value)}
      className={`pl-2 pr-2 pt-1 mx-1 my-1 pb-1 w-16 text-center text-sm font-semibold rounded-full text-md ${
        selected ? 'bg-blue-600 text-white' : 'bg-white text-black'
      } ring-1 ring-zinc-800 hover:ring-blue-600 transition`}
    >
      {text}
    </button>
  );
};

export default Chip;
