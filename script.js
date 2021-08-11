window.onload = printMessage(generateGrid());
var turn = null;
var markedCells = 0;
const winningCombinations = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
];

//Generates 3x3 game table according to the Tic Tac Toe game rules.
//Built-in cell marking based on the users input.
function generateGrid() {
    document.getElementById("restartGame").style.display = "none";
    let container = document.getElementById("grid");
    for (let i = 1; i <= 9; ++i) {
        let cell = document.createElement("div");
        cell.id = "cell" + i;
        container.appendChild(cell);
        document.getElementById("cell" + i).onclick = function() {
            document.getElementById("cell" + i).innerHTML = playerTurn();
            document.getElementById("cell" + i).onclick = null;
            ++markedCells;
            checkWinner();
        };
    }
    return "Player X starts first!";
}

//Checks and prints the players turn according to the state of the last turn;
function playerTurn() {
    if (turn === null) {
        turn = "X";
        printMessage("It's Player O turn");
    } else if (turn === "X") {
        turn = "O";
        printMessage("It's Player X turn");
    } else {
        turn = "X";
        printMessage("It's Player O turn");
    }
    return turn;
}

//Checks all the possible winning combinations.
function checkWinner() {
<<<<<<< HEAD
    let winnerFound = null;
    for (let i = 0; i < 8; ++i) {
        let countX = 0, countO = 0;
=======
    for (let i = 0; i < 8; ++i) {
        let countX = 0,countO = 0;
>>>>>>> bb2726ce567d960df78921bf90e02b36fed26eea
        let cellId = [2];
        for (let j = 0; j < 3; ++j) {
            cellId[j] = document.getElementById("cell" + winningCombinations[i][j]);
            let cellValue = document.getElementById("cell" + winningCombinations[i][j]).innerHTML;
            if (cellValue === "X") {
                ++countX;
            } else if (cellValue === "O") {
                ++countO;
            }
            if (countX === 3 || countO === 3) {
                printMessage(showWinner(cellId[0], cellId[1], cellId[2]));
<<<<<<< HEAD
                winnerFound = true;
            }
        }
    }
    if (markedCells === 9 && !winnerFound) {
=======
            }
        }
    }
    if (markedCells === 9) {
>>>>>>> bb2726ce567d960df78921bf90e02b36fed26eea
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

    //Clears the grid and generates a new one to play again.
    function restartGame() {
        document.getElementById("grid").innerHTML = null;
        printMessage(generateGrid());
        message.style.animation = "none";
        turn = null;
        markedCells = 0;
    }

    //Prints all messages according to parameters it receives from the other functions.
    function printMessage(message) {
        return document.getElementById("message").innerHTML = message;
    }
