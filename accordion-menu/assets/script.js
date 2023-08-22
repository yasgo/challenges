const isAutoClosed = true;
const liCollection = document.querySelectorAll(".accordion-container li");

const autoClosedControl = () => {
  const activeLi = document.querySelector(".accordion-container li.active");

  if (activeLi) {
    activeLi.classList.remove("active");
  }
};

const onLiClick = (e) => {
  if (isAutoClosed) autoClosedControl();

  e.currentTarget.classList.toggle("active");
};

liCollection.forEach((item) => item.addEventListener("click", onLiClick));
