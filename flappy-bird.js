document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('flappyBirdCanvas');
    const ctx = canvas.getContext('2d');

    const bird = {
        x: 50,
        y: 150,
        width: 20,
        height: 20,
        gravity: 0.4,
        lift: -8,
        velocity: 0
    };

    const pipes = [];
    const pipeWidth = 20;
    const pipeGap = 100;
    let frameCount = 0;
    let score = 0;

    canvas.addEventListener('click', () => {
        bird.velocity = bird.lift;
    });

    function drawBird() {
        ctx.fillStyle = '#ff5722';
        ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
    }

    function drawPipes() {
        ctx.fillStyle = '#388E3C';
        pipes.forEach(pipe => {
            ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
            ctx.fillRect(pipe.x, canvas.height - pipe.bottom, pipeWidth, pipe.bottom);
        });
    }

    function updateBird() {
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;

        if (bird.y + bird.height > canvas.height) {
            bird.y = canvas.height - bird.height;
            bird.velocity = 0;
        }

        if (bird.y < 0) {
            bird.y = 0;
            bird.velocity = 0;
        }
    }

    function updatePipes() {
        if (frameCount % 75 === 0) {
            const top = Math.random() * (canvas.height / 2);
            const bottom = canvas.height - top - pipeGap;
            pipes.push({ x: canvas.width, top: top, bottom: bottom });
        }

        pipes.forEach(pipe => {
            pipe.x -= 2;
        });

        if (pipes.length && pipes[0].x < -pipeWidth) {
            pipes.shift();
            score++;
        }
    }

    function checkCollision() {
        for (let pipe of pipes) {
            if (
                bird.x < pipe.x + pipeWidth &&
                bird.x + bird.width > pipe.x &&
                (bird.y < pipe.top || bird.y + bird.height > canvas.height - pipe.bottom)
            ) {
                resetGame();
            }
        }
    }

    function resetGame() {
        bird.y = 150;
        bird.velocity = 0;
        pipes.length = 0;
        score = 0;
        frameCount = 0;
    }

    function drawScore() {
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, 10, 20);
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBird();
        drawPipes();
        updateBird();
        updatePipes();
        checkCollision();
        drawScore();

        frameCount++;
        requestAnimationFrame(gameLoop);
    }

    document.getElementById('back').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    resetGame();
    gameLoop();
});
