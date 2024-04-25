const list = document.querySelector(".list");

//creating a function that based on the starting width of the arrow icon it will either scroll smoothly to the left or the right

function handleClick(direction) {
  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;
  
  // Based on the direction we call `scrollBy` with the item width we got earlier
direction === "previous" ?     list.scrollBy({ left: -itemWidth, behavior: "smooth" }) :     list.scrollBy({ left: itemWidth, behavior: "smooth" });

}
//creating a function that when the hamburger menu gets clicked the style of the side bar style will change to 'flex'

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}
//creation a function that when close icon gets clicked the side bar will no longer appear

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}