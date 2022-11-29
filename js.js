const light = document.querySelector('#bulb');
var pressed = 0;
var count = 1;
const lampText = document.getElementById("lampText")
light.addEventListener('click', function(e){

    e.target.classList.toggle('bulb-on');
    count++
    if (count % 2 == 0)
    {
        pressed++;
    }
    lampText.textContent = pressed == 1 ? `Du har tänt lampan ${pressed} gång` : `Du har tänt lampan ${pressed} gånger`;

})