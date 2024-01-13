import { useState } from "react";
import Options from "./Options";
import Option from "../images/options.png";
import useGetEntries from "../custom Hooks/useGetEntries";
const BookMarkLink = ({ entry }) => {
  const [show, setShow] = useState(false);
  const address = entry.address.startsWith("http")
    ? entry.address
    : `https://${entry.address}`;
  return (
    <>
      <div className="flex group gap-4 cursor-pointer hover:border-[#0F1035] hover:border transition items-center mb-4  py-2 px-4">
        <div className="basis-[50px] flex-shrink-0 h-[50px] rounded-lg p-1 border border-[#0F1035] "></div>
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
        <div className="">
          <button
            onClick={() => setShow(!show)}
            className="cursor-pointer self-start mt-[10px]"
          >
            <img src={Option} alt="" />
          </button>
          <Options
            show={show}
            folder={entry}
            
          />
        </div>
      </div>
    </>
  );
};

export default BookMarkLink;
