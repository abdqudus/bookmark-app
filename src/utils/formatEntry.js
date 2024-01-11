export const formatEntry = ({
  name,
  address = "none",
  type = "folder",
  parent = undefined,
}) => {
  if (name) {
    if (type == "folder") {
      if (parent) {
        return { id: Date.now(), name, isTopMost: false, parent, type };
      } else {
        return { id: Date.now(), name, isTopMost: true, parent, type };
      }
    } else {
      const arr = address.split("/").filter((i) => i.includes("."));
      const domain = arr.length == 1 ? arr[0] : arr.join();

      if (parent) {
        return {
          id: Date.now(),
          name,
          isTopMost: false,
          type: "bookmark",
          address,
          parent,
          domain,
        };
      } else {
        return {
          id: Date.now(),
          name,
          isTopMost: true,
          type: "bookmark",
          address,
          parent,
          domain,
        };
      }
    }
  }
};
