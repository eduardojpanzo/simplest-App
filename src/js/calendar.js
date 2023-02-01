//Toggle Theme
document.querySelector(".switch.theme").addEventListener("click", () => {
  document.querySelector("html").classList.toggle("light");
  document.querySelector(".theme .switch-indent").classList.toggle("active");
});
