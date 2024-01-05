import { useState } from "react";
import useConnectToDb from "./useConnectToDb";

const useCreateNewFolder = () => {
  const { store } = useConnectToDb();
  const [folderName, setFolderName] = useState({ value: "" });
  return <div></div>;
};

export default useCreateNewFolder;
