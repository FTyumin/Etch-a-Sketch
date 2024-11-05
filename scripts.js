let container = document.querySelector(".container");

for(let i=0;i<4;i++) {
    let div = document.createElement('div');
    div.setAttribute("id", "main")
    for(let j=0;j<4;j++) {
        let innerDiv = document.createElement('div');
        div.appendChild(innerDiv);
    }

    container.appendChild(div);
}