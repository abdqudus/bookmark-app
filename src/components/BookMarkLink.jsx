const BookMarkLink = ({ entry }) => {
  return (
    <>
      <div className="flex group gap-4 cursor-pointer hover:bg-[#0F1035] items-center mb-4  py-2 px-4">
        <div className="basis-[50px] flex-shrink-0 h-[50px] rounded-lg p-1 border border-[#0F1035] group-hover:border-white"></div>
        <div className="flex-grow flex-shrink overflow-hidden ">
          <p className="medium:max-w-[250px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">
            {entry.name}
          </p>
          <a href={entry.address} className="font-semibold">
            {entry.domain}
          </a>
        </div>
      </div>
    </>
  );
};

export default BookMarkLink;
