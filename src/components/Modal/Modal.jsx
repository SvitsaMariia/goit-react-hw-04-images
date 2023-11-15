import css from './Modal.module.css';
import { useEffect } from 'react';
import propTypes from 'prop-types';

export const Modal = ({ onClose, src, alt }) => {
  const handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const closeOnEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeOnEsc);
    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={handleOutsideClick}>
      <div className={css.Modal}>
        <img src={src} alt={alt} width="800px" height="600px" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: propTypes.func,
  src: propTypes.string,
  alt: propTypes.string,
};