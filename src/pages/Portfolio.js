import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../components/PageTitle';
import Lightbox from '../components/Lightbox';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useGetImages from '../hooks/useGetImages';
import { showLightbox } from '../redux/lightbox/lightboxActions';
import SectionGrid from '../components/SectionGrid';
import PortfolioCard from '../components/PortfolioCard';
import useSlideIn from '../hooks/useSlideIn';

const Portfolio = () => {
  const { show } = useSelector((state) => state.lightbox);
  const dispatch = useDispatch();

  useDocumentTitle('Portfolio');
  const images = useGetImages(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/));

  const section = useRef(null);

  useEffect(() => {
    useSlideIn(section.current);
  }, []);

  const portfolioData = images.map((image) => {
    return {
      id: `portfolio ${image.id}`,
      src: image.image.default,
      type: 'photo', // photo, videos, youtube, soundcloud
    };
  });

  // Open lightbox when item is clicked
  const openLightbox = (item) => {
    dispatch(showLightbox({
      type: item.type,
      src: item.src,
    }));
  };

  return (
    <>
      <Lightbox />
      <div
        id="portfolio"
        className="w-full p-10 xl:pt-40 xl:pl-[440px] xl:pr-10 bg-lightBeige  "
      >
        <div
          ref={section}
          className="flex flex-col"
        >
          <PageTitle
            page="portfolio"
            text="Creative Portfolio"
          />
          <SectionGrid className="grid-cols-2 gap-6 sm:gap-12 pb-20">
            {portfolioData && portfolioData.map((item) => {
              return (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  clickHandler={openLightbox}
                />
              );
            })}
          </SectionGrid>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
