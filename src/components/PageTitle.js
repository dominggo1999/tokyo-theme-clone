const PageTitle = ({ text, page }) => {
  return (
    <div className="self-start">
      <p className="inline-block font-montserrat uppercase bg-gray-200 py-3 px-4 text-xs font-semibold text-gray-700 leading-[12px] mb-2">{page}</p>
      <h3 className="font-montserrat text-3xl font-extrabold leading-normal mb-10">{text}</h3>
    </div>
  );
};

export default PageTitle;
