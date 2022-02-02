import React from 'react';

const Title = function Title({ text }) {
  return (
    <div>
      {' '}
      <h2 className="text-center text-5xl font-normal leading-normal mt-0 mb-2 text-indigo-800">
        {text}
      </h2>
    </div>
  );
};

export default Title;
