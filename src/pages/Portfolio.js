import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../components/PageTitle';
import Lightbox from '../components/Lightbox';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useGetImages from '../hooks/useGetImages';
import { showLightbox } from '../redux/lightbox/lightboxActions';
import SectionGrid from '../components/SectionGrid';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const { show } = useSelector((state) => state.lightbox);
  const dispatch = useDispatch();

  useDocumentTitle('Portfolio');
  const images = useGetImages(require.context('../assets/portfolio', false, /\.(png|jpe?g|svg)$/));

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
      <div className="h-screen min-h-[400px] w-full p-10 flex flex-col  xl:pt-40 xl:pl-[440px] xl:pr-10 bg-lightBeige  ">
        <PageTitle
          page="portfolio"
          text="Creative Portfolio"
        />
        <SectionGrid className="grid-cols-2 gap-6 sm:gap-10 pb-20">
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
    </>
  );
};

export default Portfolio;
