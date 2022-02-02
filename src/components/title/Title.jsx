import React from 'react';

const Title = function Title({ text }) {
  return (
    <div className="text-center text-5xl font-normal leading-normal mt-0 mb-2 text-indigo-800">
      <h2> {text} </h2>
    </div>
  );
};

export default Title;
