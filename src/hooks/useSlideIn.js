import { useEffect } from 'react';
import { TweenMax, Power3 } from 'gsap';

const useSlideIn = (element) => {
  TweenMax.from(
    element,
    0.8,
    {
      x: 150,
      opacity: 0,
      ease: Power3.easeOut,
      delay: 0.3,
    },
  );
};
export default useSlideIn;
