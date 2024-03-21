// NAVBAR DAN DROPDOWN
const hamburgerBtn = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");
const navbarList = document.querySelector(".list");
const body = document.body;

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownList = document.querySelectorAll(".dropdown-list");

hamburgerBtn.addEventListener("click", () => {
 if (navbarList.classList.toggle("active")) {
  body.style.overflow = "hidden";
 } else {
  body.style.overflow = "auto";
 }
});

dropdownBtn.forEach((btn, index) => {
 btn.addEventListener("click", event => {
  event.stopPropagation();
  //close dropdown
  dropdownList.forEach((list, i) => {
   if (i !== index) {
    list.classList.remove("active");
   }
  });
  dropdownList[index].classList.toggle("active");
 });
});

//close dropdon klik sembarang tempat
document.addEventListener("click", () => {
 dropdownList.forEach(list => {
  list.classList.remove("active");
 });
});

// Tambahkan event listener untuk scroll pada window
window.addEventListener("scroll", function () {
 // Tambahkan kondisi untuk mode landscape
 if (window.innerWidth > window.innerHeight) {
  navbarList.style.overflowY = "scroll";
 } else {
  navbarList.style.overflowY = "visible";
 }
 nav.classList.toggle("active", window.scrollY > 0);
});
// NAVBAR DAN DROPDOWN
