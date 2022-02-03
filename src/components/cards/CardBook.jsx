import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AllBooks } from '../../api/books';
import { BlueButton } from '../buttons/index';

const CardBook = function CardBook() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);

  /**
   * Fetch des données en BDD
   */
  useEffect(() => {
    AllBooks()
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);
  /**
   * Fonction pour aller sur la page de détail du livre choisi
   * @param {number} id correspond à l'id du livre sélectionné
   */
  const handleViewMore = (id) => {
    navigate(`/allbooks/${id}`);
  };

  /**
   * Fonction pour afficher la popup de confirmation
   */
  const handleDelete = () => {
    setPopup(!popup);
  };
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data.map((book) => {
        console.log(book);
        return (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={book.bookid}
          >
            <img src={book.couverture} alt="book" />
            <div className="float-right">
              <svg
                cursor="pointer"
                xmlns="http://www.w3.org/2000/svg"
                className=" text-red-400 w-7 h-7"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={handleDelete}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Author : {book.author}
              </span>
              <br />
              <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Category : {book.category}
              </span>
            </div>
            <BlueButton
              text="View more"
              onClick={() => handleViewMore(book.bookid)}
            />
          </div>
        );
      })}

      {popup ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="mb-6 w-52">
              <p className="mb-4 text-sm text-gray-500">Are you sure ?</p>
              <div className="mt-5">
                <button
                  type="button"
                  className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                >
                  {' '}
                  Yes
                </button>
                <button
                  type="button"
                  className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                  onClick={handleDelete}
                >
                  {' '}
                  No{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default CardBook;
