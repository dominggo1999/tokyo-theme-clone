import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const pathname = useLocation();

  console.log(document.getElementById('root'));

  useEffect(() => {
    document.getElementById('main').scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
