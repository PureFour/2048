var Tiles = [];
var level = new Level();

function setup()
{
    createCanvas(500, 500);
    // for(let i = 0; i < 7; i++)
    //   Tiles.push(new Tile(i * 50, 0, i + 1));
    Tiles.push(new Tile(150, 150, 2));
    Tiles.push(new Tile(250, 150, 2));
    Tiles.push(new Tile(150, 250, 2));
    Tiles.push(new Tile(250, 250, 2));
}

function draw()
{
  background(0,0,0);
  level.show();
  for(let i = 0; i < Tiles.length; i++)
  {
    Tiles[i].show();
    Tiles[i].move();
    Tiles[i].check_edges();
    Tiles[i].check_collisions();
  }
}
