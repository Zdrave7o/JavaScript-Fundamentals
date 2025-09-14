function printChessBoard(n){
    let htmlCode = `<div class="chessboard">`;
    for(let row = 0; row < n; row++){
        htmlCode+=`\n <div>\n`;
        for(let col = 0; col < n; col++){
            let color = (row + col) % 2 === 0 ? "black" : "white";
            htmlCode += `    <span class="${color}"></span>\n`;
        }
        htmlCode+=` </div>`
    }
    htmlCode+=`\n</div>`;

    console.log(htmlCode);
    
}

printChessBoard(3)