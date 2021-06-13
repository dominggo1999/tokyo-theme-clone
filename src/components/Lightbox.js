import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im';
import { Portal } from 'react-portal';
import { hideLightbox } from '../redux/lightbox/lightboxActions';

const Lightbox = () => {
  const dispatch = useDispatch();
  const { show, type, src } = useSelector((state) => state.lightbox);

  useEffect(() => {
    if(show) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  // Close lightbox
  const closeLightbox = () => dispatch(hideLightbox());

  if(!show) {
    return null;
  }

  return (
    <Portal>
      <div className="fixed top-0 left-0 w-full h-screen z-10 overflow-y-auto">
        <div
          className="w-full h-full relative bg-black opacity-70 cursor-pointer min-h-[550px]"
          onClick={closeLightbox}
          role="banner"
        >
        </div>
        <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full p-12 pointer-events-none min-h-[550px]">
          <div className="absolute">
            <ImCancelCircle
              className="absolute top-0 right-0 text-xl text-white opacity-50 hover:opacity-100 pointer-events-auto cursor-pointer ease-in-out duration-200"
              onClick={closeLightbox}
            />
            <img
              src={src}
              alt="cool"
              className="h-auto xs:max-h-[550px] pointer-events-auto p-5"
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Lightbox;
