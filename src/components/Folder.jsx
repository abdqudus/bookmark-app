import { Link, useParams } from "react-router-dom";
import FolderImg from "../images/folder.png";
import Option from "../images/options.png";
import FolderImg2 from "../images/folder2.png";
import { useState } from "react";
import Options from "./Options";
const Folder = ({ folder }) => {
  const [showOptions, setShowOptions] = useState(false);
  const url = new URL(window.location.href);
  const path = url.pathname;
  const pathArr = path.split('/')
  console.log(pathArr[pathArr.length - 1])
  const { parentName } = useParams()
  console.log(parentName)
  return (
    <div className="flex hover:border-[#0F1035] hover:border group justify-between px-2 cursor-pointer">
      <Link to={`${folder.name}`} className="w-full block">
        <div className="flex flex-grow relative gap-4 cursor-pointer items-center mb-4  py-2 px-4">
          <div className="w-[50px] h-[50px] rounded-lg p-1 border border-[#0F1035] ">
            <img
              className="group-hover:hidden"
              src={FolderImg}
              alt=""
              width={20}
              height={20}
            />
            <img
              className="group-hover:block hidden"
              src={FolderImg2}
              alt=""
              width={20}
              height={20}
            />
          </div>
          <p className="flex-grow font-bold ">{folder.name}</p>
        </div>
      </Link>
      <div className="">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="cursor-pointer self-start mt-[10px]"
        >
          <img src={Option} alt="" />
        </button>
        <Options showOptions={showOptions} setShowOptions={setShowOptions} entry={folder} />

      </div>
    </div>
  );
};

export default Folder;
