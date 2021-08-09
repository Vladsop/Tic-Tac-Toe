generateGrid();
var turn = null;
var markedCells = 0;

//Generates 3x3 game table according to the Tic Tac Toe game rules.
function generateGrid() {
    document.getElementById("restartGame").style.display = "none";
    printMessage("Player X is the first one that ticks the grid!");
    let container = document.getElementById("grid");
    for (let i = 1; i <= 9; ++i) {
        let cell = document.createElement("div");
        cell.id = "cell" + i;
        container.appendChild(cell);
        document.getElementById("cell" + i).onclick = function() {
            markCell("cell" + i);
        };
    }
}

//Checks the players turn according to the state of the last turn;
function playerTurn() {
    if (turn === null) {
        turn = "X";
    } else if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
    return turn;
}

//Marks the cells according to the users input and calls the checkWinner() function;
function markCell(id) {
    document.getElementById(id).innerHTML = playerTurn();
    document.getElementById(id).onclick = null;
    if (document.getElementById(id).innerHTML === "X") {
        printMessage("It's Player O turn");
    } else if (document.getElementById(id).innerHTML === "O") {
        printMessage("It's Player X turn");
    }
    ++markedCells;
    checkWinner();
}

//Checks all the possible  winning combinations.
function checkWinner() {
    if (cell1.innerHTML == cell2.innerHTML && cell2.innerHTML == cell3.innerHTML && cell1.innerHTML != "") {
        printMessage(showWinner(cell1, cell2, cell3));
    } else if (cell4.innerHTML == cell5.innerHTML && cell5.innerHTML == cell6.innerHTML && cell4.innerHTML != "") {
        printMessage(showWinner(cell4, cell5, cell6));
    } else if (cell7.innerHTML == cell8.innerHTML && cell8.innerHTML == cell9.innerHTML && cell7.innerHTML != "") {
        printMessage(showWinner(cell7, cell8, cell9));
    } else if (cell1.innerHTML == cell4.innerHTML && cell4.innerHTML == cell7.innerHTML && cell1.innerHTML != "") {
        printMessage(showWinner(cell1, cell4, cell7));
    } else if (cell2.innerHTML == cell5.innerHTML && cell5.innerHTML == cell8.innerHTML && cell2.innerHTML != "") {
        printMessage(showWinner(cell2, cell5, cell8));
    } else if (cell3.innerHTML == cell6.innerHTML && cell6.innerHTML == cell9.innerHTML && cell3.innerHTML != "") {
        printMessage(showWinner(cell3, cell6, cell9));
    } else if (cell1.innerHTML == cell5.innerHTML && cell5.innerHTML == cell9.innerHTML && cell1.innerHTML != "") {
        printMessage(showWinner(cell1, cell5, cell9));
    } else if (cell3.innerHTML == cell5.innerHTML && cell5.innerHTML == cell7.innerHTML && cell3.innerHTML != "") {
        printMessage(showWinner(cell3, cell5, cell7));
    } else if (markedCells === 9) {
        printMessage("It's a tie!")
        document.getElementById("restartGame").style.display = "block";
    }
}

//Highlights the winning combination and disables further onclick actions for all cells.
function showWinner(firstId, secondId, thirdId) {
    for (let i = 1; i <= 9; ++i) {
        document.getElementById("cell" + i).onclick = null;
    }
    message.style.animation = "bounce 0.4s infinite alternate";
    firstId.style.color = "white";
    firstId.style.border = "3px solid";
    firstId.style.animation = "zoom-in-zoom-out 2s infinite alternate";
    secondId.style.color = "white";
    secondId.style.border = "3px solid";
    secondId.style.animation = "zoom-in-zoom-out 2s infinite alternate";
    thirdId.style.color = "white";
    thirdId.style.border = "3px solid";
    thirdId.style.animation = "zoom-in-zoom-out 2s infinite alternate";
    document.getElementById("restartGame").style.display = "block";
    return "The winner is Player " + firstId.innerHTML;
}

//Clears the grid and generated a new one to play again.
function restartGame() {
    document.getElementById("grid").innerHTML = null;
    message.style.animation = "none";
    generateGrid();
    turn = null;
    markedCells = 0;
}

//Prints all messages according to parameters it receives from the other functions.
function printMessage(message) {
    return document.getElementById("message").innerHTML = message;
}
