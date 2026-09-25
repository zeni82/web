const blocks = [
    { width: 50, height: 40 },
    { width: 100, height: 60 },
    { width: 70, height: 80 },
    { width: 120, height: 50 }
];

const root = document.createElement("div");

for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");

    block.className = "block";

    block.style.width = blocks[i].width + "px";
    block.style.height = blocks[i].height + "px";

    root.appendChild(block);
}

document.body.appendChild(root);