export const getModalState = (modalState, action) => {
  const { name, id } = action;
  return { ...modalState, [name]: !modalState[name], dispatcherId: id };
};
// const
