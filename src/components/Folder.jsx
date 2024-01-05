import FolderImg from "../images/folder.png";
import FolderImg2 from "../images/folder2.png";
const Folder = ({ folder }) => {
  return (
    <div className="flex group gap-4 cursor-pointer hover:bg-[#0F1035] items-center mb-4  py-2 px-4">
      <div className="w-[50px] h-[50px] rounded-lg p-1 border border-[#0F1035] group-hover:border-white">
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
      <p className="flex-grow group-hover:text-white" key={folder}>
        {folder.name}
      </p>
    </div>
  );
};

export default Folder;
