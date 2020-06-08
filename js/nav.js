const menu_toggle = document.querySelector(".menu");
const tab_phone_nav = document.querySelector("#phone_nav");
let toggled = true;

console.log(menu_toggle);
console.log(tab_phone_nav);

menu_toggle.addEventListener("click", e => {
  if (toggled) {
    tab_phone_nav.style.height = "auto";
    return toggled = false;
  } else {
    tab_phone_nav.style.height = "0px";
    return toggled = true;
  }
});
