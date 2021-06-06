// This hook get all images from spesified path

const useGetImages = (folder) => {
  const importAll = (context) => {
    return context.keys().map((i) => {
      const imageName = i.replace('./', '');
      return {
        id: imageName,
        image: context(i),
      };
    });
  };

  return importAll(folder);
};

export default useGetImages;
