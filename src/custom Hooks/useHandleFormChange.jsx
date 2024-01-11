import { useState } from "react";

const useHandleFormChange = () => {
  const [bookmark, setBookmark] = useState({ name: "", address: "" });
  const handleChange = (e) => {
    setBookmark((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return { bookmark, handleChange };
};

export default useHandleFormChange;
