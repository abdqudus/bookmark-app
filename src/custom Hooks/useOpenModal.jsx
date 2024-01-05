import React, { useState } from "react";

const useOpenModal = () => {
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);

  return { isNewFolderOpen, setIsNewFolderOpen };
};
export default useOpenModal;
