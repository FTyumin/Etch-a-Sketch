let container = document.querySelector(".container");

let i=10;
function value() {
    if(i==0) {i=10;}
    opacity = i/10;
    i--;
    console.log(opacity);
    return opacity;
};

function createGrid(sideLength) {
    clearGrid();
    let cellSize = container.clientHeight / sideLength;
    for(let i=0;i<sideLength;i++) {
        let div = document.createElement('div');
        div.style.height = `${container.clientHeight}px`
        div.style.width = `${cellSize}px`;
        div.setAttribute("id", "main");

        for(let j=0;j<sideLength;j++) {
            let innerDiv = document.createElement('div');
            innerDiv.style.height = `${cellSize}px`;
            innerDiv.style.width = `${cellSize}px`;

            innerDiv.addEventListener("mouseover", () => {
                // generating random color, code from css tricks
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                let color = '#' + randomColor;
            
                innerDiv.style.background = color;
                innerDiv.style.opacity =value();
            })
            innerDiv.setAttribute("class", "grid");
            div.appendChild(innerDiv);
        }
    
        container.appendChild(div);
    }
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

let button = document.querySelector("button");
button.addEventListener("click", () => {

    let sideLength = prompt("Enter amount of squares for grid", 4);
    clearGrid();
    createGrid(sideLength);
})

createGrid(4);
