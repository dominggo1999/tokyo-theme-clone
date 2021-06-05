import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'Tokyo | About';
  }, []);

  return (
    <div className="h-screen min-h-[400px] w-full p-10 flex justify-center items-center">
      geawgaewgaewgaew
    </div>
  );
};

export default About;
