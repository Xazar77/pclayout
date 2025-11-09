const modalBtn = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");

const setCloseIcon = () => {
  const modaInner = modal.querySelector(".modal__inner");
  modaInner.style.position = "relative";

  modaInner.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal__close">
      <img src="../img/close.svg" style="width: 100%" class="modal__close_icon" />
    </div>`
  );

  document.querySelector(".modal__close").style.cssText = `
    position: absolute;
    top:30px;
    right: 30px;
    width: 24px;
    height:24px;
    cursor: pointer;
    `;
};
setCloseIcon();

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

modal.addEventListener("click", (e) => {
  const modalContent = e.target.closest(".modal__inner");
  const modalClose = e.target.closest(".modal__close");

  if (!modalContent || modalClose) {
    modal.style.display = "";
  }
});
