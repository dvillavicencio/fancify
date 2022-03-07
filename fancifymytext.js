let element = document.getElementById('input');

function fancifyText() {
    element.style.fontWeight = 'bold';
    element.style.textDecoration = 'underline';
    element.style.color = 'BLUE'
    alert("Styles were applied!");
}

function boringText() {
    element.style.textDecoration = null;
    element.style.color = null;
    element.style.fontFamily = null;
    element.style.textTransform = null;
    element.style.fontSize = null;
}

function biggifyText(){
    element.style.fontSize = "4em";
}

function moo() {
    element.style.textTransform = 'uppercase';
    let parts = element.value.split(".");
    let str = parts.join("moo.");
    element.value = str;
}

let mooButton = document.getElementById('moo');
mooButton.addEventListener("click", moo);

let biggerButton = document.getElementById('bigger');
biggerButton.addEventListener("click", biggifyText);

let fancyShmancyButton = document.getElementById('fancy');
fancyShmancyButton.addEventListener("click", fancifyText)

let boringButton = document.getElementById('boring');
boringButton.addEventListener("click", boringText);