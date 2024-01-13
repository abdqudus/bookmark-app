import { useContext } from "react";
import { ModalsContext } from "../contexts/ModalContext";

const useModalContext = () => {
  const modalsContext = useContext(ModalsContext);
  return modalsContext;
};

export default useModalContext;
