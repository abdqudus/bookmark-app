export const formatEntry = ({
  name,
  address = "none",
  type = "folder",
  parent = undefined,
}) => {
  if (name) {
    if (type == "folder") {
      const obj = {
        id: Date.now(),
        name,
        parent,
        type,
        path: document.location.pathname,
      };
      if (parent) {
        return { ...obj, isTopMost: false };
      } else {
        return {
          ...obj,
          isTopMost: true,
        };
      }
    } else {
      const arr = address.split("/").filter((i) => i.includes("."));
      const domain = arr.length == 1 ? arr[0] : arr.join();
      const obj = {
        id: Date.now(),
        name,
        parent,
        domain,
        type: "bookmark",
        address,
      };
      if (parent) {
        return { ...obj, isTopMost: false };
      } else {
        return { ...obj, isTopMost: true };
      }
    }
  }
};
