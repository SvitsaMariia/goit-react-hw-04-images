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