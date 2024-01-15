export const getModalState = (modalState, action) => {
  const { name } = action;
  return { ...modalState, [name]: !modalState[name] };
};
