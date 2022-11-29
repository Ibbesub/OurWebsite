function toggle() {
    var x = document.getElementById("moreInformation");
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
