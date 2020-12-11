const menu = document.getElementById("my-menu");
function show() {
  menu.classList.add("menu-show");
}

function hide() {
  menu.classList.remove("menu-show");
}

const menuElement = document.querySelectorAll(".menu-element");
menuElement.forEach((option) => {
  option.addEventListener("click", (event) => {
    document.getElementById("my-menu").classList.remove("menu-show");
  });
})

// const menuElement = document.querySelectorAll(".menu-element");
// menuElement.forEach((option) => {
//   option.addEventListener("click", (event) => {
//     document.querySelector(".active").classList.toggle("active");
//     event.currentTarget.classList.toggle("active");
//   });
// })
