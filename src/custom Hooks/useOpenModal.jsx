import { useState } from "react";

const useOpenModal = () => {
  const [isNewFolder, setIsNewFolder] = useState(false);

  return { isNewFolder, setIsNewFolder };
};
export default useOpenModal;
