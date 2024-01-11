export const fadeOutModal = (ref, cb) => {
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
    cb(false);
    form.classList.remove("fade-out");
  }, 500);
};
