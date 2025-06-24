const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 300;

// Paddle & Ball properties
const paddleWidth = 60;
const paddleHeight = 5;
const ballRadius = 7;
let paddleX, paddleY;
let ballX, ballY;

// Scoreboard values
let score = 0;
let lives = 3;
let timer = 0;

// Init scoreboard
document.getElementById("score").innerText = score;
document.getElementById("lives").innerText = lives;
document.getElementById("timer").innerText = timer;

// Draw paddle
function drawPaddle() {
    ctx.beginPath();

    if (canvas.classList.contains("c-shape") || canvas.classList.contains("inverse-c-shape")) {
        // paddle menegak
        ctx.rect(paddleX, paddleY, paddleHeight, paddleWidth);
    } else {
        // paddle mendatar
        ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    }

    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

// Draw ball
function drawCircle() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

// Update canvas & draw everything
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawPaddle();
}

// Shape navigation
const navItems = document.querySelectorAll(".nav ul li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        // Reset class
        canvas.classList.remove("c-shape", "u-shape", "inverse-c-shape", "inverse-u-shape");
        navItems.forEach(i => i.classList.remove("active"));

        // Set active class
        item.classList.add("active");

        const shapeId = item.id;

        if (shapeId === "c_shape") {
            canvas.classList.add("c-shape");
            paddleX = canvas.width - paddleHeight; // kanan
            paddleY = (canvas.height - paddleWidth) / 2; // tengah menegak
            ballX = paddleX - ballRadius;
            ballY = paddleY + paddleWidth / 2;
        }

        else if (shapeId === "u_shape") {
            canvas.classList.add("u-shape");
            paddleY = 0;
            paddleX = (canvas.width - paddleWidth) / 2;
            ballX = paddleX + paddleWidth / 2;
            ballY = paddleY + ballRadius + paddleHeight;

        }

        else if (shapeId === "inverse_c_shape") {
            canvas.classList.add("inverse-c-shape");
            paddleX = 0;
            paddleY = (canvas.height - paddleWidth) / 2;
            ballX = paddleX + paddleHeight + ballRadius;
            ballY = paddleY + paddleWidth / 2;
        }

        else if (shapeId === "inverse_u_shape") {
            canvas.classList.add("inverse-u-shape");
            paddleY = canvas.height - paddleHeight;
            paddleX = (canvas.width - paddleWidth) / 2;
            ballX = paddleX + paddleWidth / 2;
            ballY = paddleY - ballRadius;
        }

        // Redraw
        render();
    });
});

// Auto select C-shape on load
document.getElementById("c_shape").click();
