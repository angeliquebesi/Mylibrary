import React from 'react';

const CardBook = function CardBook() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/** intégrer une image si possible */}
        <div className="float-right">
          <svg
            cursor="pointer"
            xmlns="http://www.w3.org/2000/svg"
            className=" text-red-400 w-7 h-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Titre</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Author :
          </span>
          <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Category :
          </span>
          <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Year :{' '}
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardBook;
