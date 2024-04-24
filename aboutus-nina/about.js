const list = document.querySelector(".list");

function handleClick(direction) {
  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;
  
  // Based on the direction we call `scrollBy` with the item width we got earlier
direction === "previous" ?     list.scrollBy({ left: -itemWidth, behavior: "smooth" }) :     list.scrollBy({ left: itemWidth, behavior: "smooth" });

}

function toggleMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
