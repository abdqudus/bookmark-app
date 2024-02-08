export const getStoreState = (storeState, action) => {
  const { name, id } = action;
  return { ...storeState, [name]: !storeState[name], dispatcherId: id };
};
// const
