console.log("loaded");

const moves = new Array(9)

const squares = document.querySelectorAll(".item");
squares.forEach(square => console.log(square));
console.log(squares);
//const winMessageDiv = document.querySelector('.win-message')
const board = document.querySelector('.container')
let turnCount = 0
let turn = 'X'


function checkForWin() {
    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        alert(turn + "Won the game!");
    } else {
        console.log('no winner yet')
    }

    if (squares[0] === squares[1] && squares[0] === squares[2]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[3] === squares[4] && squares[3] === squares[5]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[6] === squares[7] && squares[6] === squares[8]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[0] === squares[3] && squares[0] === squares[6]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[1] === squares[4] && squares[1] === squares[7]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[2] === squares[5] && squares[2] === squares[8]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[0] === squares[4] && squares[0] === squares[8]) {
        if (square[0] === "X" || square[0] === "O") {
            alert(turn + "Won the game!");
        }
    } else if (squares[2] === squares[4] && squares[2] === squares[6]) {
        if (square[0] === "X" || square[0] === "O") {
            if (square[0] === "X" || square[0] === "O") {
                alert(turn + "Won the game!");
            }
        } else {
            console.log('no winner yet')
        }
    }
}
// function checkForWin() {
//     if (moves[0] === moves[1] && moves[1] === moves[2]) {
//         removeClickEventCallback()
//         squares[0].classList.add('blink')
//         squares[1].classList.add('blink')
//         squares[2].classList.add('blink')
//
//        // winMessageDiv.innerHTML = `winner in the first row ${turn}`;
//     } else {
//         console.log('no winner yet')
//     }
// }

    // function removeClickEventCallback() {
    //     // board.classList.remove('rotate')
    //     squares.forEach(square => {
    //         (square.innerText !== turn) ? square.innerText = '' : square.classList.add('blink')
    //         square.removeEventListener('click', handleClickEventCallback)
    //     })
    // }

    function handleClickEventCallback(event) {
        if (turnCount < 1) {
            board.classList.add('rotate')
        }
        squares[event.target.id] = turn
        checkForWin()
        event.target.innerText = turn
        turn = (turnCount % 2 === 0) ? "O" : "X";
        turnCount++
    }

    squares.forEach((square, index) => {
        console.log(square);
        square.setAttribute('id', `${index}`)
        square.addEventListener('click', handleClickEventCallback, {once: true})
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
// //**** SQUARE CLICKS ON GRID FOR PLACING X'S AND O'S ****
//
// const squares = document.querySelectorAll(".item");
//
// squares.forEach(square =>{
//     square.addEventListener('click', clickCurrentPlayer)
// })
//
// function clickCurrentPlayer(e) {
//     const squareArray = Array.from(squares);
//     const index = squareArray.indexOf(e.target);
//     playerTurn.innerHTML = currentPlayer;
//
// //
// //     if (currentPlayer === "playerX") {
// //         squares[index].squareArray.add('playerX');
// //         currentPlayer = "playerO";
// //
// //     } else {
// //         squares[index].squareArray.add("playerO")
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
// // for (var i = 0; i < squares.length; i++) {
// //     squares[i].addEventListener('click', clickBox);
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
// // //     const squares = document.querySelectorAll('.container')
// // //
// // //     let currentPlayer = 'playerX'
// // //
// // //     squares.forEach(squares => {
// // //         squares.addEventListener('click', clickOutcome)
// // //     })
// // //
// // //     function clickoutcome(e) {
// // //         const squareArray = Array.from(squares)
// // //         const index = squareArray.indexof(e.target)
// // //         console.log(index)
// // //         playerDisplay.innerHTML = currentPlayer
// // //     }
// // // })
// // //
// // // if ( currentPlayer === 'playerX' ) {
// // //    squares[index].classList.add()
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
