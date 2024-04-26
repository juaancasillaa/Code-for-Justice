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