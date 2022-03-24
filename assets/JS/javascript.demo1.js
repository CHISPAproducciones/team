//animación inicial//

anime.timeline({loop: 1})
  .add({
    scale: [0, 1],
    duration: 1000,
    delay: 2100,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.alert-title-message',
    scale: [0, 1],
    duration: 1000,
    delay: 2100,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.text1',
    scale: [0, 1],
    duration: 1000,
    rotateZ: -2,
    offset: '-=1000'
  }).add({
    targets: '.text2',
    scale: [0, 1],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.star1',
    scale: [0, 1, 0],
    rotateZ: [0, 0],
    duration: 1200,
    offset: '0'
  }).add({
    targets: '.star2',
    scale: [0, 1],
    rotateZ: [90, 0],
    duration: 1200,
    offset: '0'
  });

anime({
  targets: '#alet-title-initial',
  opacity: [1, 0],
  scale: [2, 1, 0],
  duration: 300,
  delay: 2000,
  easing: "linear",
  loop: 1
});

anime({
  targets: '#alet-title-end',
  opacity: [0, 1],
  duration: 300,
  delay: 2150,
  easing: "linear",
  loop: 1
});






//servicios
// DOM Elements
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
  
// Functions
const activateTab = tabnum => {
    
    tabs.forEach( tab => {
      tab.classList.remove('active')
    })
    
    tabContents.forEach( tabContent => {
        tabContent.classList.remove('active')
    })
  
    document.querySelector('#tab' + tabnum).classList.add('active')
    document.querySelector('#tabcontent' + tabnum).classList.add('active')
    localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
  
}

// Event Listeners
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.tab)
    })
})





//
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}


//










function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}// JavaScript Document