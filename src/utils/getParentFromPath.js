export const getParentFromUrl = (url) => {
  const pathName = url.pathname;
  const pathArr = pathName.split("/");
  const parent = pathArr[pathArr.length - 1].replace(/%20/g, " ");
  return parent;
};
