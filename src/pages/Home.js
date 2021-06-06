import { useEffect } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram, AiFillDribbbleCircle, AiFillLinkedin } from 'react-icons/ai';
import useDocumentTitle from '../hooks/useDocumentTitle';

const imageBgGradient = {
  backgroundImage: 'linear-gradient(322deg, rgba(68,78,94,0.022846638655462215) 0%, rgba(1,79,73,0.7147233893557423) 63%, rgba(27,80,85,1) 90%)',
};

const Home = () => {
  useDocumentTitle('Home');

  return (
    <div className="section  h-screen min-h-[400px] w-full flex justify-center items-center bg-lightBeige xl:pl-[440px] xl:py-10 xl:pr-10">
      <div className="w-[300px] min-w-[300px] h-[300px] min-h-[300px] overflow-hidden animate-morph rounded-morph relative z-10">
        <div
          className="absolute min-h-full min-w-full shadow-transparentBorder rounded-morph animate-morph z-50"
        >
        </div>
        <img
          src="https://images.unsplash.com/photo-1558730234-d8b2281b0d00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="Profile"
          className="min-h-full object-center object-cover"
        />
      </div>
      <div className="ml-20">
        <h1 className="uppercase font-montserrat text-6xl font-extrabold mb-4">ADRIANO SMITH</h1>
        <p className="text-gray-700 font-medium italic text-[16px] leading-7 font-montserrat mb-4">Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
        <div className="flex">
          <a
            href="https://twitter.com/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="text-xl mr-2" />
          </a>
          <a
            href="https://twitter.com/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-xl mx-2" />
          </a>
          <a
            href="https://twitter.com/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="text-xl mx-2" />
          </a>
          <a
            href="https://twitter.com/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillDribbbleCircle className="text-xl mx-2" />
          </a>
          <a
            href="https://twitter.com/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-xl mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
