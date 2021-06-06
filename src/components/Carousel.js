import { Swiper, SwiperSlide } from 'swiper/react';
import useGetImages from '../hooks/useGetImages';

// Import Swiper styles
import 'swiper/swiper.min.css';

const Carousel = () => {
  const images = useGetImages(require.context('../assets/partners', false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {
            images && images.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                >
                  <div className="h-[150px] flex items-center">
                    <img
                      src={item.image.default}
                      alt="Cool Slider"
                      className="w-full cursor-pointer opacity-50 hover:opacity-90 ease-in-out duration-500"
                    />
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
