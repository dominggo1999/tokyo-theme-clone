import { useEffect } from 'react';

const useDocumentTitle = (page) => {
  useEffect(() => {
    document.title = `Tokyo | ${page}`;
  }, []);
};

export default useDocumentTitle;
