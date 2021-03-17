//*****************************************************************************************
//*******************************************************************************************
//**** PLAYER INFO****


const playerDisplay = document.querySelector('#player');
let currentPlayer = "playerX";
//*****************************************************************************************
//*******************************************************************************************
//**** SQUARE CLICKS ON GRID FOR PLACING X'S AND O'S ****

var squares = document.querySelectorAll(".item");

squares.forEach(square =>{
    square.addEventListener('click', clickOutcome)
})

function clickOutcome(e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer
}


if(currentPlayer === 'playerX'){
    currentPlayer = 'player0'
}else
    currentPlayer = 'playerX'



//
// var clickBox = function(e) {
//     document.getElementsByClassName(".container");
//     console.log("test");
//
// };
//
// for (var i = 0; i < squares.length; i++) {
//     squares[i].addEventListener('click', clickBox);
// }
//*****************************************************************************************
//*******************************************************************************************
//**** GAME RULES*********


const winningCombos = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
]

//
// document.addEventListener('DOMContentLoaded',() => {
//     const squares = document.querySelectorAll('.container')
//
//     let currentPlayer = 'playerX'
//
//     squares.forEach(squares => {
//         squares.addEventListener('click', clickOutcome)
//     })
//
//     function clickoutcome(e) {
//         const squareArray = Array.from(squares)
//         const index = squareArray.indexof(e.target)
//         console.log(index)
//         playerDisplay.innerHTML = currentPlayer
//     }
// })
//
// if ( currentPlayer === 'playerX' ) {
//    squares[index].classList.add()
//     currentPlayer = 'playerO'
// } else {
//     currentPlayer = 'playerX'
// }

//*****************************************************************************************
//*******************************************************************************************
//**** BUTTON TO RESET GAME****
//
// var button = document.querySelector(".button");
//
// var newGame = function (){
//     document.getElementsByClassName(".button")
// }
//
// document.querySelector(".button").addEventListener("click", newGame);
//
// function newGame() {
//     document.querySelector(".button").innerHTML = "Hello World";
// }
//
// var newGame = function () {
//     document.querySelector(".button").onclick = function (event) {
//         //button.addEventListener('click');
//         alert("New Game");
//     }
// }


