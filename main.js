const gridContainer = document.querySelector('.gridContainer');
let color ='rgb(0, 104, 145)';
document.getElementById("myRange").value = "16";
squareDivs();


function squareDivs() {
    while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
    gridSize = document.getElementById('myRange').value;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr)`);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let squareDivs = document.createElement('div');
        squareDivs.setAttribute('style', 'background-color: rgb(216, 184, 143); width:auto; height: auto');
        gridContainer.appendChild(squareDivs);
        squareDivs.onmouseover = function () { this.style.backgroundColor = `${color}` }
    }

};
