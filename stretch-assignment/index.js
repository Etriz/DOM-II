const stack = document.querySelectorAll("blocks");
const block = document.querySelectorAll(".block");
const moveBlock = () => {
  event.target.style.backgroundColor = "black";
  event.target.style.marginLeft = "10rem";
};
block.forEach(item => {
  item.addEventListener("mousedown", moveBlock);
});
