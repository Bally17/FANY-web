var acc = document.getElementsByClassName("acordeon-btn");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingTop = "0";
        panel.style.paddingBottom = "0";
      } else {
        panel.style.paddingTop = "32px";
        panel.style.paddingBottom = "32px";
        panel.style.maxHeight = panel.scrollHeight + 64 +"px";
      }
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.getElementById("menu-bar");
    const navLinks = document.querySelector("nav ul");
    menuBar.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const offset = 10;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
    });
});

