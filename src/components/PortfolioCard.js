const PortfolioCard = ({ item, clickHandler }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer"
      onClick={() => clickHandler(item)}
      role="banner"
    >
      <img
        src={item.src}
        alt={item.src}
        className="h-[200px] sm:h-[400px] w-full object-cover object-center"
      />
    </div>
  );
};

export default PortfolioCard;
