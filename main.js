let size = 64;
const container = document.querySelector('#grid-container'); 
const resetbtn = document.querySelector('#reset');

resetbtn.onclick = reset;//run reset onclick

makeGrid(); //initialize grid at load


function reset() {
    size = prompt("Enter number of columns");
    if (size != '' && size != null){
        removeGrid();
        makeGrid();
        fade = 1;
    }
}

function makeGrid() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=1; i<=(size*size); i++) {
        let item = document.createElement('div');
        item.classList.add('grid-item');
        item.id = ("boxes");
        container.appendChild(item);
        item.addEventListener('mouseover', () => {item.style.backgroundColor = getRandomColor()});
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function hovered() {
    item.style.backgroundColor = `${getRandomColor()}`;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }