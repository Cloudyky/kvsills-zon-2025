const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Paddle properties
const paddleWidth = 60;
const paddleHeight = 5;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight; // bawah sekali

// Ball properties
const ballRadius = 7;
let ballX = paddleX + paddleWidth / 2;
let ballY = paddleY - ballRadius; // letak atas paddle

// Lukis paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

// Lukis bola
function drawCircle() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

// Panggil semua
drawCircle();
drawPaddle();
