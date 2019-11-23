// Constants
const Canvas_Boarder_Colour = 'black';
const Canvas_Background_Colour = 'white';

// Get canvas elements
var gameCanvas = document.getElementById("gameCanvas");

// 2D Context
var ctx = gameCanvas.getContext("2d");

// Canvas fill colour
ctx.fillStyle = Canvas_Background_Colour;

// Border colour
ctx.strokeStyle = Canvas_Boarder_Colour;

// Canvas rect
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Draw border
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
