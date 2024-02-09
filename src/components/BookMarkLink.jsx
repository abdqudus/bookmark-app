import { useState } from "react";
import Options from "./Options";
import Option from "../images/options.png";
const BookMarkLink = ({ entry }) => {

  const [showOptions, setShowOptions] = useState(false);

  const address = entry.address.startsWith("http")
    ? entry.address
    : `https://${entry.address}`;
  return (
    <>
      <div className="flex group gap-4 cursor-pointer hover:border-[#0F1035] hover:border transition items-center mb-4  py-2 px-4">
        <div className="basis-[50px] text-2xl text-white flex items-center justify-center flex-shrink-0 h-[50px] rounded-full bg-gradient-to-r from-[#0F1035] to-[#7FC7D9] p-1 border "></div>
        <div className="flex-grow flex-shrink overflow-hidden ">
          <p className="medium:max-w-[250px] font-bold overflow-hidden whitespace-nowrap text-ellipsis">
            {entry.name}
          </p>
          <a
            href={address}
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            {entry.domain}
          </a>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="cursor-pointer self-start mt-[10px]"
          >
            <img src={Option} alt="" />
          </button>
          <Options showOptions={showOptions} setShowOptions={setShowOptions} entry={entry} />
        </div>
      </div>
    </>
  );
};

export default BookMarkLink;
