import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SearchBar, ImageGallery, Button, Loader } from 'components';
import { fetchImages } from 'services/pixabay-api';
import css from './App.module.css';

const perPage = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetchImages({ query, page, perPage })
      .then(({ data }) => {
        if (data.totalHits === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        setImages(prevState => [...prevState, ...data.hits]);
        setShowBtn(page < Math.ceil(data.totalHits / perPage));
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, query]);

  const handleSearchFormSubmit = inputValue => {
    const normalizedInputValue = inputValue.trim();

    if (normalizedInputValue === '') {
      toast.info('Please fill out the search field!');
      return;
    }

    if (normalizedInputValue !== '' && normalizedInputValue === query) {
      toast.warning('The search query is the same.');
      return;
    }

    setQuery(normalizedInputValue);
    setPage(1);
    setImages([]);
    setShowBtn(false);
  };

  const handleLoadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSearchFormSubmit} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {showBtn && <Button onLoadMoreBtnClick={handleLoadMoreBtnClick} />}
    </div>
  );
};
