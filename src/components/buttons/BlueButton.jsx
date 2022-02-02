import React from 'react';

const BlueButton = function BlueButton({ text, onClick }) {
  return (
    <div className="w-full">
      <button
        className="w-full px-8 py-4 my-auto transition-all duration-75 ease-in-out bg-indigo-600 rounded-md text-gray-50 text-xl hover:bg-indigo-800 max-h-16"
        type="submit"
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
};

export default BlueButton;
