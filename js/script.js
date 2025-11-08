const contents = document.querySelectorAll(".program-line__content");

const closeTab = () => {
  contents.forEach((elem) => {
    elem.querySelector(".program-line__descr").classList.remove("active");
  });
};
// closeTab();

const openTab = () => {
  contents.forEach((elem) => {
    elem.querySelector(".program-line__title").addEventListener("click", () => {
      closeTab();
      elem.querySelector(".program-line__descr").classList.add("active");
    });
  });
};
openTab();
