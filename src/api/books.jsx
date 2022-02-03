import api from './routing';

const allBooks = () => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/book`);
        resolve(response.data[0]);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

const getOneBook = (id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.get(`/book/${id}`);
        resolve(response.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

const deleteBook = (id) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const response = await api.delete(`/book/${id}`);
        console.log(response);
        resolve(response);
      } catch (err) {
        reject(err);
      }
    })();
  });
};

export { allBooks, getOneBook, deleteBook };
