import React from "react";
import { useParams } from "react-router-dom";

const FolderChild = () => {
  const { parentName } = useParams();
  return <div>{parentName}</div>;
};

export default FolderChild;
