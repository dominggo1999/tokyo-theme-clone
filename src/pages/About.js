import { useRef, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import SectionWrapper from '../components/SectionWrapper';
import SectionGrid from '../components/SectionGrid';
import StatsCard from '../components/StatsCard';
import Carousel from '../components/Carousel';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useSlideIn from '../hooks/useSlideIn';

const About = () => {
  useDocumentTitle('About');
  const section = useRef(null);

  useEffect(() => {
    useSlideIn(section.current);
  }, []);

  return (
    <div
      className="w-full p-10  xl:pt-40 xl:pl-[440px] xl:pr-10 bg-lightBeige"
    >
      <div
        ref={section}
        className="flex flex-col items-center"
      >
        <PageTitle
          page="about"
          text="My Story"
        />
        <div className="min-h-[400px] w-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/175771/pexels-photo-175771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Profile"
            className="h-full w-full object-center object-cover"
          />
        </div>
        <SectionWrapper>
          <SectionTitle>
            Adriano Smith & Photographer
          </SectionTitle>
          <SectionGrid className="grid-cols-2">
            <div className="left">
              <p className="text-gray-500 font-semibold font-mulish leading-8 text-base italic mb-6">Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
              <button
                type="button"
                className="font-montserrat italic bg-black text-white py-3 px-8 text-base leading-[16px] focus:outline-none"
              >Download CV
              </button>
            </div>
            <div className="right text-gray-500 font-semibold font-mulish leading-8 ml-20">
              <ul>
                <li><strong className="text-black w inline-block w-3/12">Birthday:</strong>01.07.1990</li>
                <li><strong className="text-black w inline-block w-3/12">Age:</strong>31</li>
                <li><strong className="text-black w inline-block w-3/12">Address:</strong>Ave 11, New York, USA</li>
                <li><strong className="text-black w inline-block w-3/12">Email:</strong>mail@gmail.com</li>
                <li><strong className="text-black w inline-block w-3/12">Phone:</strong>+77 022 177 05 05</li>
                <li><strong className="text-black w inline-block w-3/12">Study:</strong>Univercity of Texas</li>
                <li><strong className="text-black w inline-block w-3/12">Freelance:</strong>Available</li>
              </ul>
            </div>
          </SectionGrid>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>
            Stats
          </SectionTitle>
          <SectionGrid className="grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">
            <StatsCard
              number="777+"
              description="Projects Completed"
            />
            <StatsCard
              number="3K"
              description="Clients Happy"
            />
            <StatsCard
              number="9K+"
              description="Lines of Code"
            />
          </SectionGrid>
        </SectionWrapper>

        <SectionWrapper>
          <SectionTitle>
            Our Partners
          </SectionTitle>
          <Carousel />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default About;
