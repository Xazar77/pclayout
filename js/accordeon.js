const accordeon = () => {
  const contents = document.querySelectorAll(".program-line__content");

  const closeTab = () => {
    contents.forEach((elem) => {
      elem.querySelector(".program-line__descr").classList.remove("active");
    });
  };
  // closeTab();

  const openTab = () => {
    contents.forEach((elem) => {
      elem
        .querySelector(".program-line__title")
        .addEventListener("click", () => {
          const descr = elem.querySelector(".program-line__descr");
          const isActive = descr.classList.contains("active");
          closeTab();
          if (!isActive) {
            descr.classList.add("active");
          }
        });
    });
  };
  openTab();
};
accordeon();
