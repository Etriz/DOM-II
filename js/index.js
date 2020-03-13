// Your code goes here
const navElement = document.getElementsByClassName("main-navigation")[0];
const links = document.querySelectorAll("a");
const changeNav = () => {
  if (window.scrollY > navElement.scrollHeight) {
    navElement.style.background = "#17a2b8";
    navElement.style.color = "white";
    navElement.style.transition = "all 500ms";
    links.forEach(item => {
      item.style.color = "white";
    });
  } else {
    navElement.style.background = "";
    navElement.style.color = "";
    links.forEach(item => {
      item.style.color = "";
    });
  }
};
window.addEventListener("scroll", changeNav);

const linkEnter = event => {
  event.target.style.borderBottom = `2px solid ${event.target.style.color}`;
  event.target.style.marginBottom = "-2px";
};
links.forEach(item => {
  item.addEventListener("mouseenter", linkEnter);
});
const linkLeave = event => {
  event.target.style.borderBottom = "";
  event.target.style.marginBottom = "";
};
links.forEach(item => {
  item.addEventListener("mouseleave", linkLeave);
});

const btns = document.querySelectorAll(".btn");
const lgBtn = () => {
  event.preventDefault;
  event.target.style.transform = "scale(1.2)";
};

btns.forEach(item => {
  item.addEventListener("click", lgBtn);
});
const smBtn = () => {
  event.preventDefault;
  event.target.style.transform = "scale(1)";
};
btns.forEach(item => {
  item.addEventListener("dblclick", smBtn);
});
