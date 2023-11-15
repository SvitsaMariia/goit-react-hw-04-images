import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleyItem.module.css';
import { useState } from 'react';
import propTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, url }) => {
  const [open, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={css.ImageGalleryItemImage}
          onClick={toggleModal}
        />
      </li>
      {open ? <Modal onClose={toggleModal} src={url} alt={alt}></Modal> : null}
    </>
  );
};

ImageGalleryItem.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  url: propTypes.string,
};