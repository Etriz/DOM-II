// Your code goes here
const navElement = document.getElementsByClassName("main-navigation")[0];
const links = document.querySelectorAll("a");
const changeNav = () => {
  if (window.scrollY > navElement.style.height) {
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
// 01 scroll
const linkEnter = event => {
  event.target.style.borderBottom = `2px solid ${event.target.style.color}`;
  event.target.style.marginBottom = "-2px";
};
// 02 mouseenter
const linkLeave = event => {
  event.target.style.borderBottom = "";
  event.target.style.marginBottom = "";
};
links.forEach(item => {
  item.addEventListener("mouseenter", linkEnter);
  item.addEventListener("mouseleave", linkLeave);
});
// 03 mouseleave
const btns = document.querySelectorAll(".btn");
const lgBtn = () => {
  event.preventDefault;
  event.stopPropagation();
  event.target.style.transform = "scale(1.2)";
};
btns.forEach(item => {
  item.addEventListener("click", lgBtn);
});
// 04 click
const smBtn = () => {
  event.preventDefault();
  event.stopPropagation();
  event.target.style.transform = "scale(1)";
};
btns.forEach(item => {
  item.addEventListener("dblclick", smBtn);
});
// 05 dblclick
const imgSizes = () => {
  event.preventDefault();
  const imgs = document.querySelectorAll("img");
  imgs.forEach(item => {
    item.style.borderRadius = "50%";
    item.style.transition = "all 300ms";
    item.style.zIndex = "-100";
  });
};
window.addEventListener("resize", imgSizes);
// 06 resize
const displaySocial = () => {
  const body = document.querySelector("body");
  const social = document.createElement("p");
  body.appendChild(social);
  social.style.height = "70px";
  social.style.width = "220px";
  social.style.background = "#17a2b8";
  social.style.color = "white";
  social.style.border = "2px dashed #c0c0c0";
  social.style.borderRadius = "10px";
  social.style.position = "fixed";
  social.style.top = "200px";
  social.style.left = "170px";
  social.style.textAlign = "center";
  social.style.padding = "10px";
  social.textContent = `Follow us on Twitter, Instagram, and Facebook`;
};
window.addEventListener("load", displaySocial);
// 07 load
const changeBorder = () => {
  const imgs = document.querySelectorAll("img");
  imgs.forEach(item => {
    item.style.border = "1px solid #17a2b8";
    // item.style.boxShadow = "5em 1em gold;";
  });
};
window.addEventListener("keydown", changeBorder);
// 08 keydown

const text = document.querySelectorAll("p");
const fontColor = () => {
  text.forEach(item => (item.style.color = "#17a2b8"));
};
window.addEventListener("wheel", fontColor);
// 09 wheel

const h2 = document.querySelectorAll("h2");
const auxClick = () => {
  event.target.style.background = "#333333";
  event.target.style.color = "#ffffff";
};
h2.forEach(item => {
  item.addEventListener("auxclick", auxClick);
});
//10 auxclick
const bottomParagraphDiv = document.querySelector(".destination");
const bottomColor = () => {
  bottomParagraphDiv.style.color = "blue";
};
bottomParagraphDiv.addEventListener("click", bottomColor);
