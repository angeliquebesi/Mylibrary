import React, { useState } from 'react';
import { BlueButton } from '../components/buttons';
import { InputNumber, InputText, InputTextArea } from '../components/input';
import Title from '../components/title/Title';

const AddBook = function AddBook() {
  const [popup, setPopup] = useState(false);

  const handleConfirmAdd = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <Title text="Add a book" />
      <div className='"flex justify-center items-center h-screen w-full'>
        <div className="mx-2 md:mx-auto md:w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <InputText
            titreLabel="Title"
            defaultValue="ex : Harry Potter and the Philosopher's Stone"
          />
          <InputText titreLabel="Author" defaultValue="ex : J.K. Rowling " />
          <InputText titreLabel="Category" defaultValue="ex : Fantasy" />
          <InputNumber titreLabel="Year" />
          <InputText titreLabel="Image" defaultValue="link http:// " />
          <InputTextArea titreLabel="Summary" />
          <div className="mx-auto mt-5 md:mt-10 w-48">
            <BlueButton text="Confirm" onClick={() => handleConfirmAdd()} />
          </div>
        </div>
      </div>
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
                  onClick={() => handleConfirmAdd()}
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
export default AddBook;
