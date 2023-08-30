const button = document.getElementById("contact-form").querySelector("button");

const getAllElements = () => {
  const inputs = getInputElements();
  const radios = getRadioElements();
  const selects = getSelectElements();
  const textareas = getTextAreaElements();

  return [...inputs, ...selects, ...textareas, ...radios];
};

const getRadioElements = () => {
  return document
    .getElementById("contact-form")
    .querySelectorAll(".form-element.radio-mode");
};

const getInputElements = () => {
  return document
    .getElementById("contact-form")
    .querySelectorAll("input:not([type='radio'])");
};

const getSelectElements = () => {
  return document.getElementById("contact-form").querySelectorAll("select");
};

const getTextAreaElements = () => {
  return document.getElementById("contact-form").querySelectorAll("textarea");
};

const validateControl = () => {
  const elements = getAllElements();
  const errorElements = [];

  elements.map((item) => {
    const isRadio = item.classList.contains("radio-mode");

    if (isRadio) {
      const isRadioChecked = radioControl(item);

      if (!isRadioChecked) {
        item.classList.add("error");
        errorElements.push(item);
      } else {
        item.classList.remove("error");
        item.classList.add("success");
      }
    } else {
      const isEmptyInput = item.value === "";

      if (isEmptyInput) {
        item.classList.add("error");
        errorElements.push(item);
      } else {
        item.classList.remove("error");
        item.classList.add("success");
      }
    }
  });

  return errorElements;
};

const radioControl = (item) => {
  const radios = item.querySelectorAll("input");
  const hasChecked = Array.from(radios).find((item) => item.checked);

  return hasChecked;
};

button.addEventListener("click", function () {
  const isValidate = validateControl();

  console.log("isValidate: ", isValidate);
});
