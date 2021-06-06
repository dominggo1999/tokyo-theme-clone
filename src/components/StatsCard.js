const StatsCard = ({ number, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-5 border-2 border-gray-300">
      <h3 className="font-montserrat text-xl font-semibold">{number}</h3>
      <p className="font-mullish font-semibold text-base text-gray-500">{description}</p>
    </div>
  );
};

export default StatsCard;
