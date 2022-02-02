import React from 'react';

const GrayButton = function GrayButton({ text, onClick }) {
  return (
    <div>
      <button
        className="w-30 px-4 py-2 text-sm text-gray-700 transition-all duration-75 ease-in-out bg-gray-100 border border-gray-200 rounded-md hover:bg-gray-200"
        type="submit"
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
};

export default GrayButton;
