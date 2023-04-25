const items = document.querySelectorAll(`.item`);
items[0].classList.add("active");

const paginar = (id) => {
  items.forEach((item) => {
    if (item.id === id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
