import { useRef, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import SectionWrapper from '../components/SectionWrapper';
import SectionGrid from '../components/SectionGrid';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSlideIn from '../hooks/useSlideIn';
import { newsData } from '../data/newsData';
import NewsCard from '../components/NewsCard';

const News = () => {
  useDocumentTitle('News');
  const section = useRef(null);

  useEffect(() => {
    useSlideIn(section.current);
  }, []);

  return (
    <div
      className="w-full p-10  xl:pl-[440px] xl:pr-10 bg-lightBeige"
    >
      <div
        ref={section}
        className="flex flex-col items-center"
      >
        <PageTitle
          page="News"
          text="Later News"
        />
        <SectionGrid className="grid-cols-2 gap-6 sm:gap-12 pb-20">
          {newsData && newsData.map(({ id, ...restProps }) => {
            return (
              <NewsCard
                key={id}
                {...restProps}
              />
            );
          })}
        </SectionGrid>
      </div>
    </div>
  );
};

export default News;
