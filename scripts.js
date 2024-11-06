let container = document.querySelector(".container");

for(let i=0;i<4;i++) {
    let div = document.createElement('div');
    div.setAttribute("id", "main")
    for(let j=0;j<4;j++) {
        let innerDiv = document.createElement('div');
        innerDiv.addEventListener("mouseover", () => {
            console.log("Event triggered");
            innerDiv.style.background = "red";
        })
        innerDiv.setAttribute("id", "grid");
        div.appendChild(innerDiv);
    }

    container.appendChild(div);
}

// let gridElements = document.querySelectorAll("#grid");
// for(element of gridElements) {
//     element.addEventListener("mouseover", () => {
//         console.log("Event triggered");
//         element.style.background = "red";
//     })
// }