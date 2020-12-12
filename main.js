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

const options = menu.getElementsByClassName("menu-element");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
