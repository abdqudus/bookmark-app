import FolderImg from "../images/folder.png";
import FolderImg2 from "../images/folder2.png";
const Folder = ({ folder }) => {
  return (
    <div className="flex group gap-2 cursor-pointer hover:bg-[#0F1035] items-center mb-4 p-4">
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
      <p className="flex-grow group-hover:text-white" key={folder}>
        {folder.name}
      </p>
    </div>
  );
};

export default Folder;
