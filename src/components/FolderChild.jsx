import React from "react";
import { useParams } from "react-router-dom";
import Folder from "./Folder";
import BookMarkLink from "./BookMarkLink";
import EntryList from "./EntryList";

const FolderChild = () => {
  const { parentName } = useParams();

  const url = new URL(window.location.href);
  const path = url.pathname;
  const pathArr = path.split('/')
  console.log(pathArr[pathArr.length - 1])

  return <EntryList parentName={parentName} />

};

export default FolderChild;
