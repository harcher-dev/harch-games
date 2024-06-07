document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { name: 'Tic-Tac-Toe', url: 'tic-tac-toe.html' },
        { name: 'Flappy Bird', url: 'flappy-bird.html' },
        { name: 'Hangman', url: 'hangman.html' },
        { name: 'Snake', url: 'snake.html' },
        { name: '3D Car Game Thing', url: 'cargame.html' },
        // Add more games here
    ];

    const gameList = document.getElementById('game-list');

    games.forEach(game => {
        const button = document.createElement('button');
        button.textContent = game.name;
        button.classList.add('game-button');
        button.addEventListener('click', () => {
            window.location.href = game.url;
        });
        gameList.appendChild(button);
    });
});
