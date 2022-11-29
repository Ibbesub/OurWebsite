function toggle() {
    var x = document.getElementById("moreInformation");
    var lamp = document.getElementById("lampis");
    // lamp.style.toggle('lamp-on');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

const light = document.querySelector('#bulb');
var pressed = 0;
var count = 1;
const lampText = document.getElementById("lampText")
light.addEventListener('click', function(e){
    const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

    e.target.classList.toggle('bulb-on');
    count++
    if (count % 2 == 0)
    {
        pressed++;
    } 
    e.target.style.left = getRandom(0,500-200)+'px';
    e.target.style.top = getRandom(0,500-200)+'px';
    lampText.textContent = pressed == 1 ? `Du har tänt lampan ${pressed} gång` : `Du har tänt lampan ${pressed} gånger`;
})

function searchBox() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  console.log(filter)
  if(filter.length === 0){
      hideElements();
  }
}

function hideElements() {
  
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {      
     

      li[i].style.display = "none";      
  }
}


function toggle2() {
  document.getElementById("#bulb").toggle('bulb-på');
  console.log("hey");

    }
