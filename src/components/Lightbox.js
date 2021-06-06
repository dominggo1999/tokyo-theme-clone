import { useSelector, useDispatch } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im';
import { hideLightbox } from '../redux/lightbox/lightboxActions';

const Lightbox = () => {
  const dispatch = useDispatch();
  const { show, type, src } = useSelector((state) => state.lightbox);

  // Close lightbox
  const closeLightbox = () => dispatch(hideLightbox());

  if(!show) {
    return null;
  }

  return (
    <div className="absolute w-full h-screen z-10">
      <div
        className="w-full h-full relative bg-black opacity-70 cursor-pointer min-h-[550px]"
        onClick={closeLightbox}
        role="banner"
      >
      </div>
      <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full p-12 pointer-events-none min-h-[550px]">
        <div className="absolute">
          <ImCancelCircle
            className="absolute right-5 -top-2 text-xl text-white opacity-50 hover:opacity-100 pointer-events-auto cursor-pointer ease-in-out duration-200"
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
  );
};

export default Lightbox;
