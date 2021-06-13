import { AiOutlineHeart } from 'react-icons/ai';

const NewsCard = ({ ...restProps }) => {
  const {
    author, date, likes, imageURL, title,
  } = restProps;

  return (
    <div className="card flex flex-col shadow-card">
      <div className="image-container h-[250px] flex overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={imageURL}
          alt="News"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between font-montserrat text-gray-600 text-[14px] pb-4 border-b-[1px] border-gray-300">
          <span className="italic">By
            <span className="cursor-pointer">
              {author}
            </span> / {date}
          </span>
          <span className="flex flex-grow-0 flex-shrink-0 items-center cursor-pointer font-medium">
            <AiOutlineHeart className="mr-1" />
            <span> {likes}</span>
          </span>
        </div>
        <div className="cursor-pointer py-4 title font-montserrat text-[18px] font-semibold">{title}</div>
        <span className="cursor-pointer font-mulish uppercase text-[13px] tracking-wider">Read More</span>
      </div>
    </div>
  );
};

export default NewsCard;
