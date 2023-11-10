// import { createPortal } from 'react-dom';
// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export const Modal = ({ largeImageURL, tags, onClose }) => {
//   const handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       onClose();
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = event => {
//       if (event.code === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return createPortal(
//     <div className={css.Backdrop} onClick={handleBackdropClick}>
//       <div className={css.Modal}>
//         <img className={css.ModalImg} src={largeImageURL} alt={tags} />
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

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