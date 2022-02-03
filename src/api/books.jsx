import api from './routing';

const AllBooks = () => {
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

export default AllBooks;
