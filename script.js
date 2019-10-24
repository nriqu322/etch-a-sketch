const gridContainer = document.querySelector('.gridContainer');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');
const reset = document.querySelector('#reset');

let gridSize = 16;

function createGrid() {
    let gridRows = gridSize;
    let gridCols = gridSize;

    for (let i = 0; i < gridRows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        gridContainer.appendChild(row);
        for (let j = 0; j < gridCols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        };
    }; 
};
createGrid();

black.addEventListener('click', () => {
    let cells = Array.from(document.querySelectorAll('.grid-cell'));
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    });
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    };
    return color;
};

rainbow.addEventListener('click', () => {
    let cells = Array.from(document.querySelectorAll('.grid-cell'));
    cells.forEach((cell) => {
        cell.addEventListener('mouseover',() => {
            cell.style.backgroundColor = getRandomColor();
        });
    });
});

reset.addEventListener('click', () => {
    gridSize = parseInt(prompt('Grid size?, Between 1 and 50:'));
    if (gridSize < 1 || gridSize > 50) {   
        alert('Sorry, max number is 50');
        gridSize = 50;
    }
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid();
});