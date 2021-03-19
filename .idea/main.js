

const moves = [0,1,2,3,4,5,6,7,8];

const movess = document.querySelectorAll(".item");
movess.forEach(moves => console.log(moves));
console.log(movess);
//const winMessageDiv = document.querySelector('.win-message')
const board = document.querySelector('.container')
let turnCount = 0
let turn = 'X'


function checkForWin() {

    // if (moves[0] === moves[1] && moves[1] === moves[2]) {
    //      alert(turn + "Won the game!");
    // } else {
    //     console.log('no winner yet')
    // }

    if ((moves[0] === "X" && moves[1] === "X" && moves[2] === "X")||(moves[0] === "O" && moves[1] === "O" && moves[2] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[3] === "X" && moves[4] === "X" && moves[5] === "X")||(moves[3] === "O" && moves[4] === "O" && moves[5] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[6] === "X" && moves[7] === "X" && moves[8] === "X")||(moves[6] === "O" && moves[7] === "O" && moves[8] === "O")) {
        alert(turn + "Won the game!");
    }

    else if ((moves[0] === "X" && moves[3] === "X" && moves[6] === "X")||(moves[0] === "O" && moves[3] === "O" && moves[6] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[1] === "X" && moves[4] === "X" && moves[7] === "X")||(moves[1] === "O" && moves[4] === "O" && moves[7] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[2] === "X" && moves[5] === "X" && moves[8] === "X")||(moves[2] === "O" && moves[5] === "O" && moves[8] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[0] === "X" && moves[4] === "X" && moves[8] === "X")||(moves[0] === "O" && moves[4] === "O" && moves[8] === "O")) {
        alert(turn + "Won the game!");
    }
    else if ((moves[2] === "X" && moves[4] === "X" && moves[6] === "X")||(moves[2] === "O" && moves[4] === "O" && moves[6] === "O")) {
        alert(turn + "Won the game!");
    }

         else {
            console.log('no winner yet')
    }
}

    // function removeClickEventCallback() {
    //     // board.classList.remove('rotate')
    //     movess.forEach(moves => {
    //         (moves.innerText !== turn) ? moves.innerText = '' : moves.classList.add('blink')
    //         moves.removeEventListener('click', handleClickEventCallback)
    //     })
    // }

    function handleClickEventCallback(event) {
        if (turnCount < 1) {
            board.classList.add('rotate')
        }
        moves[event.target.id] = turn
        console.log(moves)

        checkForWin()
        event.target.innerText = turn
        turn = (turnCount % 2 === 0) ? "O" : "X";
        turnCount++
    }

    movess.forEach((moves, index) => {
        console.log(moves);
        moves.setAttribute('id', `${index}`)
        moves.addEventListener('click', handleClickEventCallback, {once: true})

    })


// //*****************************************************************************************
// //*******************************************************************************************
// //**** PLAYER INFO****
//
//
// const playerTurn = document.querySelector('#player');
//
// let currentPlayer = "playerX";
//
// //*****************************************************************************************
// //*******************************************************************************************
// //**** moves CLICKS ON GRID FOR PLACING X'S AND O'S ****
//
// const movess = document.querySelectorAll(".item");
//
// movess.forEach(moves =>{
//     moves.addEventListener('click', clickCurrentPlayer)
// })
//
// function clickCurrentPlayer(e) {
//     const movesArray = Array.from(movess);
//     const index = movesArray.indexOf(e.target);
//     playerTurn.innerHTML = currentPlayer;
//
// //
// //     if (currentPlayer === "playerX") {
// //         movess[index].movesArray.add('playerX');
// //         currentPlayer = "playerO";
// //
// //     } else {
// //         movess[index].movesArray.add("playerO")
// //         currentPlayer = "playerX";
// //     }
// // }
//
//
// //
// // var clickBox = function(e) {
// //     document.getElementsByClassName(".container");
// //     console.log("test");
// //
// // };
// //
// // for (var i = 0; i < movess.length; i++) {
// //     movess[i].addEventListener('click', clickBox);
// // }
// //*****************************************************************************************
// //*******************************************************************************************
// //**** GAME RULES*********
//     const moves = new Array(9)
//     var turn = 'X';
//     var turnCount = O;
//
//     function checkForWin() {
//         if (moves[0] === moves[1] && moves[1] === moves[2]) {
//             alert(turn + "Won the game!");
//         } else {
//             console.log('no winner yet')
//         }
//     }
//
// function handleClickEventCallback(event) {
//     moves[index] = turn
//     console.log(moves, event.target)
//     checkForWin()
//     event.target.innerText = turn
//     turn = (turnCount % 2 === 0) ? "O" : "X";
//     turnCount++
//     console.log("next turn", turn)
// } {once: true}
// }
// //
//
//
//
// //
// // // const winningCombos = [
// // //
// // //         [0,1,2],
// // //         [3,4,5],
// // //         [6,7,8],
// // //         [0,4,8],
// // //         [2,4,6],
// // //         [0,3,6],
// // //         [1,4,7],
// // //         [2,5,8]
// // // ]
// //
// // //
// // // document.addEventListener('DOMContentLoaded',() => {
// // //     const movess = document.querySelectorAll('.container')
// // //
// // //     let currentPlayer = 'playerX'
// // //
// // //     movess.forEach(movess => {
// // //         movess.addEventListener('click', clickOutcome)
// // //     })
// // //
// // //     function clickoutcome(e) {
// // //         const movesArray = Array.from(movess)
// // //         const index = movesArray.indexof(e.target)
// // //         console.log(index)
// // //         playerDisplay.innerHTML = currentPlayer
// // //     }
// // // })
// // //
// // // if ( currentPlayer === 'playerX' ) {
// // //    movess[index].classList.add()
// // //     currentPlayer = 'playerO'
// // // } else {
// // //     currentPlayer = 'playerX'
// // // }
// //
// // //*****************************************************************************************
// // //*******************************************************************************************
// // //**** BUTTON TO RESET GAME****
// // //
// // // var button = document.querySelector(".button");
// // //
// // // var newGame = function (){
// // //     document.getElementsByClassName(".button")
// // // }
// // //
// // // document.querySelector(".button").addEventListener("click", newGame);
// // //
// // // function newGame() {
// // //     document.querySelector(".button").innerHTML = "Hello World";
// // // }
// // //
// // // var newGame = function () {
// // //     document.querySelector(".button").onclick = function (event) {
// // //         //button.addEventListener('click');
// // //         alert("New Game");
// // //     }
// // // }
// //
