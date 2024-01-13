import { createContext, useState } from "react";

export const ModalsContext = createContext(null);

const ModalContext = ({ children }) => {
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const [isNewBookmarkModalOpen, setIsNewBookmarkModalOpen] = useState(false);
  return (
    <ModalsContext.Provider
      value={{
        isNewFolderOpen,
        setIsNewFolderOpen,
        isNewBookmarkModalOpen,
        setIsNewBookmarkModalOpen,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalContext;
