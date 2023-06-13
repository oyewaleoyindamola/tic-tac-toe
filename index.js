document.title = "Tic-Tac-Toe"

const gameBoard = document.querySelector("#gameBoard");
const score = document.querySelector("#score");
const boxes = ["","","","","","","","",""]

function createBoard() {
    boxes.forEach((box, index) => {
    const boxElement = document.createElement('div')
    boxElement.classList.add('square')
    boxElement.id = index
    gameBoard.append(boxElement)
});
}

createBoard()

