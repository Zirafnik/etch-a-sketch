const container= document.querySelector('#grid-container');

function createGridElements(gridSize) {
    for(let i=0; i<gridSize; i++) {
        let child= document.createElement('div');
        child.classList.add('grid-element');
        container.appendChild(child);
    }
}

createGridElements(256);

container.addEventListener('mouseover', addColor);

function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
  }

function addColor(e) {
   // if() {
     //   e.target.classList.add('grid-element-black');
   // } else if() {
        e.target.style.backgroundColor='rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
   // }
}

//clear
const clear= document.querySelector('#clear');
clear.addEventListener('click', clearGrid);
function clearGrid() {
    let blackElements=document.querySelectorAll('.grid-element-black');
    blackElements.forEach(div => div.classList.remove('grid-element-black'));

    let randomElements=container.children;
    Object.keys(randomElements).forEach(key => randomElements[key].style.backgroundColor='white');
}

//update
let gridLength;
const updateBtn= document.querySelector('#update');
updateBtn.addEventListener('click', getGridSize);

function getGridSize() {
    let length= document.querySelector('#input-number').value;

    if(length>100) {
        alert('The maximum length is 100 blocks');
        return;
    } else if(length<1) {
        alert('You must have at least 1 block');
        return;
    }

    let lengthSqrd=length**2;
    
    document.querySelectorAll('.grid-element').forEach(div => container.removeChild(div));

    document.documentElement.style.setProperty('--grid-length', length);

    createGridElements(lengthSqrd);
}