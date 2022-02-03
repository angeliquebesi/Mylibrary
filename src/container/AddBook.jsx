import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postBook } from '../api/books';
import { BlueButton } from '../components/buttons';
import { InputNumber, InputText, InputTextArea } from '../components/input';
import Title from '../components/title/Title';

const AddBook = function AddBook() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [title, setTitle] = useState(
    "ex : Harry Potter and the Philosopher's Stone"
  );
  const [author, setAuthor] = useState('ex : J.K. Rowling');
  const [publishdate, setPublishdate] = useState(parseInt('2000', 10));
  const [couverture, setCouverture] = useState('link http:// ');
  const [summary, setSummary] = useState('');

  /**
   * Fonction pour afficher la popup de confirmation
   */
  const handleConfirmAdd = () => {
    setPopup(!popup);
  };
  /**
   * Fonction pour transmettre les données à la BDD nécessite de passer un objet
   * Déclenche la fermeture de la popup
   * Retourne à la page de tous les livres
   */
  const handleAddBook = () => {
    postBook({ title, author, publishdate, couverture, summary }).catch(() => {
      return true;
    });
    setPopup(!popup);
    navigate('/allbooks');
  };
  return (
    <div>
      <Title text="Add a book" />
      <div
        htmlFor="addbook"
        className='"flex justify-center items-center h-screen w-full'
      >
        <div className="mx-2 md:mx-auto md:w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <InputText titreLabel="Title" defaultValue={title} funct={setTitle} />
          <InputText
            titreLabel="Author"
            defaultValue={author}
            funct={setAuthor}
          />
          <InputText titreLabel="Category" defaultValue="ex : Fantasy" />
          <InputNumber
            titreLabel="publishdate"
            defaultValue={publishdate}
            funct={setPublishdate}
          />
          <InputText
            titreLabel="Image"
            defaultValue={couverture}
            funct={setCouverture}
          />
          <InputTextArea
            titreLabel="Summary"
            defaultValue={summary}
            funct={setSummary}
          />
          <div className="mx-auto mt-5 md:mt-10 w-48">
            <BlueButton text="Confirm" onClick={handleConfirmAdd} />
          </div>
        </div>
      </div>
      {popup ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="mb-6 w-52">
              <p className="mb-4 text-sm text-gray-500">
                Do you want to add this book in your library ?
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800"
                  onClick={handleAddBook}
                >
                  {' '}
                  Yes
                </button>
                <button
                  type="button"
                  className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                  onClick={handleConfirmAdd}
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
