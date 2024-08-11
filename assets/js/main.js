// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar link
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active section animation
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 150);

  // remover toggle icon and navbar
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// window.addEventListener('scroll', () => {
//     const metaTag = document.querySelector('meta[name="theme-color"]');
//     if (window.scrollY / window.innerHeight > 0.8) {
//         metaTag.setAttribute("content", "#00aba0");
//     }
//     else {
//         metaTag.setAttribute("content", "#00aba0");
//     }

// }, false);
