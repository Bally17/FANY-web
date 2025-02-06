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

document.querySelectorAll('a[href^="#"], button[onclick^="location.href=\'#"]').forEach(element => {
  element.addEventListener("click", function (e) {
      e.preventDefault();

      let targetId;

      if (this.tagName === "A") {
          targetId = this.getAttribute("href");
      } else if (this.tagName === "BUTTON") {
          const match = this.getAttribute("onclick").match(/'#([^']+)'/);
          if (match) {
              targetId = `#${match[1]}`;
          }
      }

      const target = document.querySelector(targetId);
      const offset = 10;

      if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
          });
      }
  });
});

document.getElementById("menu-bar").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelectorAll('.links-list').forEach(div => {
  div.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      if (url) {
          window.open(url, "_blank");
      }
  });
});

document.querySelectorAll('a[href^="http"]').forEach(link => {
  link.setAttribute("target", "_blank");
});
