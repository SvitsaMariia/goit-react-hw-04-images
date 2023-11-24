// import { SearchBar } from './SearchBar/SearchBar';
// import { imagesApi } from 'services/pixabay-api';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { useState, useEffect } from 'react';

// export const App = () => {
//   const [q, setQ] = useState('');
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [images, setImages] = useState([]);
//   const [btn, setBtn] = useState(false);

//   const handleChangeQuery = newQ => {
//     setImages([]);
//     setPage(1);
//     setQ(newQ);
//   };
//   useEffect(() => {
//     if (!q) {
//       return;
//     }
//     const getData = async () => {
//       try {
//         setLoading(true);
//         const data = await imagesApi({ q, page });
//         setImages(prev => [...prev, ...data.data.hits]);

//         setBtn(page < Math.ceil(data.data.totalHits / 12));
//       } catch (err) {
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, [q, page]);

//   const handleBtnClick = () => {
//     setPage(prev => prev + 1);
//   };

//   return (
//     <>
//       <SearchBar onSubmit={handleChangeQuery} />

//       {loading && <Loader />}

//       <ImageGallery arr={images} />

//       {btn && <Button cb={handleBtnClick} />}
//     </>
//   );
// };


import { SearchBar } from './SearchBar/SearchBar';
import { imagesApi } from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';
import { Modal } from './Modal/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';


export function App() {
  const [inputValue, setInputValue] = useState('');
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);

    imagesApi(inputValue, page)
      .then(response => {
        setGallery(state => [...state, ...response.data.hits]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [inputValue, page]);

  const nextPage = () => {
    setPage(state => state + 1);
    scroll.scrollToBottom();
  };

  const handleFormSubmit = value => {
    setInputValue(value);
    setGallery([]);
    setPage(1);
  };

  const LargeImg = large => {
    setModalImg(large);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleFormSubmit} />
      {gallery.length > 0 && (
        <ImageGallery
          options={gallery}
          onClick={toggleModal}
          modalImg={LargeImg}
        />
      )}
      {loading && <Loader />}
      {gallery.length > 0 && !loading && <Button nextPage={nextPage} />}
      {showModal && (
        <Modal onClick={toggleModal}>
          <img style={{ width: 1000 }} src={modalImg} alt="modal" />
        </Modal>
      )}

      <ToastContainer autoClose={3000} />
    </div>
  );
}