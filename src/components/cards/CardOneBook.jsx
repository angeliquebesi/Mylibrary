import React, { useState } from 'react';
import { updateBook } from '../../api/books';
import { GrayButton } from '../buttons/index';

const CardOneBook = function CardOneBook({ item }) {
  const [updateStatus, setUpdateStatus] = useState(false);
  const [selectStatut, setSelectStatut] = useState({});
  const [reading, setReading] = useState(item.statut);

  const value = ['Unread', 'Reading', 'Finished'];

  /**
   * Fonction pour valider le changement de statut et faire disparaitre la popup
   */
  const handleChangeStatus = () => {
    updateBook({ selectStatut }, item.bookid)
      .then((result) => setReading(result.statut))
      .catch((err) => {
        console.error(err);
      });

    setUpdateStatus(false);
  };
  return (
    <div className=" w-full lg:max-w-full lg:flex">
      <div>
        <img className="mx-auto" src={item.couverture} alt="couverture" />{' '}
        <div className="h-12 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" />
        <div className="lg:bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-gray-700 text-base">{item.summary}</p>
          </div>
          <div className="flex flex-col text-center md:flex-row md:place-content-around">
            <div className="text-lg">
              <p className="text-gray-700 p-3 leading-none">
                Author : {item.author}{' '}
              </p>
              <p className="text-gray-700 p-3 leading-none">
                Category : {item.category}
              </p>
              <p className="text-gray-700 p-3 leading-none">
                Year : {item.publishdate}{' '}
              </p>
            </div>
            <div className="text-lg">
              <p className="text-gray-700 p-3 leading-none">
                {' '}
                Status : <span className="font-medium">{reading}</span>
              </p>
              <div className="my-5">
                <GrayButton
                  text="Change Status"
                  onClick={() => {
                    setUpdateStatus(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {updateStatus ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="mb-6 w-52">
              <p className="mb-4 text-sm text-gray-500">Status</p>
              <select
                className="w-full border border-gray-300 rounded-md"
                name="filter"
                id="filter"
                onChange={(e) => setSelectStatut(e.target.value)}
              >
                <option value="all">All</option>
                {value.map((data) => (
                  <option value={data}>{data}</option>
                ))}
              </select>
              <div className="mt-5">
                <GrayButton text="Valid" onClick={handleChangeStatus} />
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

export default CardOneBook;
