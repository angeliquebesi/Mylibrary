import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allBooks, deleteBook } from '../../api/books';
import { BlueButton } from '../buttons/index';

const CardBook = function CardBook() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState([]);
  const [book, setBook] = useState();
  const [filterStatut, setFilterStatut] = useState(true);

  const statChoice = ['All', 'Unread'];
  /**
   * Fetch des données en BDD
   */
  useEffect(async () => {
    await allBooks()
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
   * @param {number} id
   */
  const handleConfirmDelete = (id) => {
    setBook(id);
    setPopup(!popup);
  };
  /**
   * Fonction pour supprimer le livre de la BDD
   */
  const handleDeleteBook = async () => {
    await deleteBook(book).catch(() => true);
    window.location.reload(false);
  };

  /**
   * Fonction pour filtrer les livres en fonction du statut
   * @param {objet} stat
   * @param {number} index
   * @param {string} self
   * @returns
   */
  function unRead(stat, index, self) {
    return filterStatut || self[index].statut === 'Unread';
  }

  return (
    <div>
      <select
        className=" flex justify-center w-48 mx-auto border border-gray-300 rounded-md"
        name="filter"
        id="filter"
        onChange={() => setFilterStatut(!filterStatut)}
      >
        {statChoice.map((filt) => {
          return <option value={filt}>{filt}</option>;
        })}
      </select>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data
          .filter(unRead)

          .map((b) => {
            return (
              <div
                className=" flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg"
                key={b.bookid}
              >
                <div className="flex flex-row justify-end p-2">
                  <svg
                    cursor="pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" text-red-400 w-7 h-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => handleConfirmDelete(b.bookid)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <img src={b.couverture} alt="book" className="w-5/12 mx-auto" />

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{b.title}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Author : {b.author}
                  </span>
                  <br />
                  <span className="inline-block bg-gray-100 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Category : {b.category}
                  </span>
                </div>
                <BlueButton
                  text="View more"
                  onClick={() => handleViewMore(b.bookid)}
                />
              </div>
            );
          })}

        {popup ? (
          <div className="fixed z-10 inset-0 flex items-center justify-center">
            <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
            <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
              <div className="mb-6 w-52">
                <p className="mb-4 text-sm text-gray-500">
                  Delete this book, are you sure ?
                </p>
                <div className="mt-5">
                  <button
                    type="button"
                    className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                    onClick={handleDeleteBook}
                  >
                    {' '}
                    Yes
                  </button>
                  <button
                    type="button"
                    className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                    onClick={() => setPopup(!popup)}
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
    </div>
  );
};
export default CardBook;
