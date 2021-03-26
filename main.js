
const moves = [0,1,2,3,4,5,6,7,8];
const playerStatus = document.querySelector("#player");
const movess = document.querySelectorAll(".item");
//movess.forEach(moves => console.log(moves));
//console.log(movess);
const board = document.querySelector('.container')
let turnCount = 0
let turn = 'X'


function checkForWin() {

    if ((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")||(moves[0] === "O" && moves[1] === "O" && moves[2] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[3] === "X" && moves[4] === "X" && moves[5] === "X")||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[6] === "X" && moves[7] === "X" && moves[8] === "X")||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[0] === "X" && moves[3] === "X" && moves[6] === "X")||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[1] === "X" && moves[4] === "X" && moves[7] === "X")||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[2] === "X" && moves[5] === "X" && moves[8] === "X")||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[0] === "X" && moves[4] === "X" && moves[8] === "X")||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")) {
        alert(turn + " Won the game!");
    }
    else if ((moves[2] === "X" && moves[4] === "X" && moves[6] === "X")||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O")) {
        alert(turn + " Won the game!");
    }
         else {
            console.log('no winner yet')
    }
}

    function handleClickEventCallback(event) {
        if (turnCount < 1) {
            board.classList.add('rotate')
        }
        moves[event.target.id] = turn
        console.log(moves)

        checkForWin()
        event.target.innerText = turn
        turn = (turnCount % 2 === 0) ? "O" : "X";
        playerStatus.innerHTML = " Player" + turn;
        turnCount++
    }

    movess.forEach((moves, index) => {
        console.log(moves);
        moves.setAttribute('id', `${index}`)
        moves.addEventListener('click', handleClickEventCallback, {once: true})

    })



function clickCurrentPlayer(e) {
    const movesArray = Array.from(movess);
    const index = movesArray.indexOf(e.target);
    playerTurn.innerHTML = currentPlayer;


    if (currentPlayer === "playerX") {
        movess[index].movesArray.add("playerX");
        currentPlayer = "playerO";

    } else {
        movess[index].movesArray.add("playerO")
        currentPlayer = "playerX";
    }
}
