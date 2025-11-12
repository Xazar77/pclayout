const sendForm = () => {
  const form = document.querySelector(".modal");

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = (form) => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    sendData(formBody)
      .then((data) => {
        console.log(data);
        form.reset();
        form.querySelector(".modal__subheader").style.cssText = `
        color: green;
        opacity: 1;
        transition: opacity 5s;
        `;
      })
      .catch((error) => {
        alert("При отправке данных произошла ошибка");
      });
  };
  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm(form);
    });
  } catch (error) {
    console.log(error.message);
  }
};
sendForm();
