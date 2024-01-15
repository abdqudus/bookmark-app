export const fadeOutModal = (ref, dispatch, eventObj) => {
  const form = ref.querySelector("form");
  form.classList.add("fade-out");
  form.addEventListener(
    "animationend",
    () => {
      ref.classList.add("fade-out");
    },
    { once: true }
  );
  setTimeout(() => {
    dispatch(eventObj);
    form.classList.remove("fade-out");
  }, 500);
};
