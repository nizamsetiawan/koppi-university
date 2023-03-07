const currentLocation = location.pathname;
const navLinks = document.querySelectorAll("nav ul li a");
const navLength = navLinks.length;

for (let i = 0; i < navLength; i++) {
  if (navLinks[i].href.includes(currentLocation)) {
    navLinks[i].classList.add("active");
  }
}
