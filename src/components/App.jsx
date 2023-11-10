// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import { SearchBar, ImageGallery, Button, Loader } from 'components';
// import { fetchImages } from 'services/pixabay-api';
// import css from './App.module.css';

// const perPage = 12;

// export const App = () => {
//   const [images, setImages] = useState([]);
//   const [query, setQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [showBtn, setShowBtn] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!query) return;

//     setLoading(true);

//     fetchImages({ query, page, perPage })
//       .then(({ data }) => {
//         if (data.totalHits === 0) {
//           toast.error(
//             'Sorry, there are no images matching your search query. Please try again.'
//           );
//         }

//         setImages(prevState => [...prevState, ...data.hits]);
//         setShowBtn(page < Math.ceil(data.totalHits / perPage));
//       })
//       .catch(error => {
//         toast.error(`${error.message}`);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [page, query]);

//   const handleSearchFormSubmit = inputValue => {
//     const normalizedInputValue = inputValue.trim();

//     if (normalizedInputValue === '') {
//       toast.info('Please fill out the search field!');
//       return;
//     }

//     if (normalizedInputValue !== '' && normalizedInputValue === query) {
//       toast.warning('The search query is the same.');
//       return;
//     }

//     setQuery(normalizedInputValue);
//     setPage(1);
//     setImages([]);
//     setShowBtn(false);
//   };

//   const handleLoadMoreBtnClick = () => {
//     setPage(prevState => prevState + 1);
//   };

//   return (
//     <div className={css.App}>
//       <SearchBar onSubmit={handleSearchFormSubmit} />
//       <ImageGallery images={images} />
//       {loading && <Loader />}
//       {showBtn && <Button onLoadMoreBtnClick={handleLoadMoreBtnClick} />}
//     </div>
//   );
// };

import { SearchBar } from './SearchBar/SearchBar';
import { imagesApi } from 'services/pixabay-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';

export const App = () => {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [btn, setBtn] = useState(false);

  const handleChangeQuery = newQ => {
    setImages([]);
    setPage(1);
    setQ(newQ);
  };
  useEffect(() => {
    if (!q) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const data = await imagesApi({ q, page });
        setImages(prev => [...prev, ...data.data.hits]);

        setBtn(page < Math.ceil(data.data.totalHits / 12));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [q, page]);

  const handleBtnClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleChangeQuery} />

      {loading && <Loader />}

      <ImageGallery arr={images} />

      {btn && <Button cb={handleBtnClick} />}
    </>
  );
};