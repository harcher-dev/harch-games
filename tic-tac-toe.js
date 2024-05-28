document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('tic-tac-toe-board');
    const resetButton = document.getElementById('reset');
    const backButton = document.getElementById('back');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');
    const cells = [];
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function createBoard() {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
            cells.push(cell);
        }
    }

    function handleCellClick(e) {
        const cell = e.target;
        const index = cell.dataset.index;

        if (cell.textContent !== '' || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;
        if (checkWin()) {
            showPopup(`${currentPlayer} wins!`);
            gameActive = false;
            return;
        }

        if (cells.every(cell => cell.textContent !== '')) {
            showPopup('Draw!');
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWin() {
        return winningConditions.some(condition => {
            return condition.every(index => cells[index].textContent === currentPlayer);
        });
    }

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }

    resetButton.addEventListener('click', () => {
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        gameActive = true;
        popup.style.display = 'none';
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    createBoard();
});
