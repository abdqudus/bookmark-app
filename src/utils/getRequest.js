export const getRequest = () => {
  const request = window.indexedDB.open("BookmarksDb", 1);

  request.onerror = (event) => {
    console.log(event);
  };

  return request;
};
