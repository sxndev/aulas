// script.js

const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box
};
let score = 99999999n;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && direction !== "up") direction = "left";
  else if (e.key === "ArrowUp" && direction !== "right") direction = "up";
  else if (e.key === "ArrowRight" && direction !== "down") direction = "right";
  else if (e.key === "ArrowDown" && direction !== "left") direction = "down";
});

function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, 400, 400);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "left") headX -= box;
  if (direction === "right") headX += box;
  if (direction === "up") headY -= box;
  if (direction === "down") headY += box;

  if (headX === food.x && headY === food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
  } else {
    snake.pop();
  }

  const newHead = { x: headX, y: headY };

  // colisão com parede ou com o próprio corpo
  if (
    headX < 0 || headY < 0 || headX >= canvas.width || headY >= canvas.height ||
    snake.some((segment) => segment.x === headX && segment.y === headY)
  ) {
    clearInterval(game);
    alert("Game Over! Pontuação: " + score);
  }

  snake.unshift(newHead);

  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Pontuação: " + score, 10, 20);
}

const game = setInterval(draw, 100);
