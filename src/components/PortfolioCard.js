const PortfolioCard = ({ item, clickHandler }) => {
  return (
    <div
      className="portfolio-card__container overflow-hidden cursor-pointer"
      onClick={() => clickHandler(item)}
      role="banner"
    >
      <img
        src={item.src}
        alt={item.src}
        className="portfolio-card__image h-[200px] sm:h-[400px] w-full object-cover object-center"
      />
    </div>
  );
};

export default PortfolioCard;
