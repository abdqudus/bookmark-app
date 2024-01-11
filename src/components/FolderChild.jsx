import React from "react";
import { useParams } from "react-router-dom";

const FolderChild = () => {
  const { parentName } = useParams();
  console.log(parentName);
  return <div>Hello world</div>;
};

export default FolderChild;
