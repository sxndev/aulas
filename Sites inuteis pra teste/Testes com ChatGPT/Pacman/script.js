// script.js

const canvas = document.getElementById("pacman");
const ctx = canvas.getContext("2d");

const pacman = {
  x: 200,
  y: 200,
  size: 20,
  dx: 2,
  dy: 0,
  angle: 0.2,
  mouthOpen: true,
};

function drawPacman() {
  ctx.beginPath();
  const angle = pacman.mouthOpen ? 0.2 : 0;
  ctx.moveTo(pacman.x, pacman.y);
  ctx.arc(
    pacman.x,
    pacman.y,
    pacman.size,
    angle * Math.PI,
    (2 - angle) * Math.PI
  );
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function move() {
  pacman.x += pacman.dx;
  pacman.y += pacman.dy;

  // Reaparecer do outro lado
  if (pacman.x > canvas.width) pacman.x = 0;
  if (pacman.x < 0) pacman.x = canvas.width;
  if (pacman.y > canvas.height) pacman.y = 0;
  if (pacman.y < 0) pacman.y = canvas.height;

  pacman.mouthOpen = !pacman.mouthOpen;
}

function gameLoop() {
  clear();
  drawPacman();
  move();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    pacman.dx = 2;
    pacman.dy = 0;
  } else if (e.key === "ArrowLeft") {
    pacman.dx = -2;
    pacman.dy = 0;
  } else if (e.key === "ArrowUp") {
    pacman.dx = 0;
    pacman.dy = -2;
  } else if (e.key === "ArrowDown") {
    pacman.dx = 0;
    pacman.dy = 2;
  }
});

// Iniciar o jogo
gameLoop();
