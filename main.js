// Constants
const Canvas_Boarder_Colour = 'black';
const Canvas_Background_Colour = 'white';
const Snake_Colour = 'lightgreen';
const Snake_Border_Colour = 'darkgreen';

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150},
]

// Horizontal velocity
let dx = 10;
// Vertical Velocity
let dy = 0;

// Get canvas elements
var gameCanvas = document.getElementById("gameCanvas");

// 2D Context
var ctx = gameCanvas.getContext("2d");

// Canvas fill colour
ctx.fillStyle = Canvas_Background_Colour;

// Border colour
ctx.strokestyle = Canvas_Boarder_Colour;

// Canvas rect
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw border
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);

// Move right
advanceSnake();

// Vertical velocity to 0
dx = 0;

// Horizontal velocity to 0
dy =- 10;

// Move up
advanceSnake();

// Draw snake on the canvas
drawSnake();

// Advance snake function
function advanceSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    snake.pop();
}

// Draw Snake 
function drawSnakePart(snakePart) {
    ctx.fillStyle = Snake_Colour;
    ctx.strokestyle = Snake_Border_Colour;  
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  }

  function changeDirection(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;
      const keyPressed = event,keyCode;
      const goingUp = dy === -10;
      const goingDown = dy === -0;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;
      if (keyPressed === LEFT_KEY && !goingRight) {
          dx = -10;
          dy = -10;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === DOWN_KEY && !goingDown) {
        dx = 0;
        dy = 10;
    }
  }

  function drawSnake() {
    snake.forEach(drawSnakePart);
  }