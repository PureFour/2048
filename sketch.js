var Tiles = [];
var level = new Level();
var targetX, targetY;
var click_sound, yeah_sound;
let score = 0;

function preload() {
  click_sound = new Audio("click_sound.wav");
  yeah_sound = new Audio("yeah.wav");
}
function setup() {
  createCanvas(500, 500);
  // for(let i = 0; i < 7; i++)
  //   Tiles.push(new Tile(i * 50, 0, i + 1));
  Tiles.push(new Tile(150, 150, 6));
  Tiles.push(new Tile(250, 150, 6));
  Tiles.push(new Tile(150, 250, 6));
  Tiles.push(new Tile(250, 250, 6));
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 255);
  level.show();
  textSize(32);
  text("Score : " + score, 50, 50);
  for (var i = 0; i < Tiles.length; i++) {
    Tiles[i].show();
    Tiles[i].move();
    Tiles[i].check_edges();
    Tiles[i].check_collisions();
  }
}
