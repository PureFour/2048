class Level
{
  constructor(rows)
  {
    this.rows = rows;
    this.boundary =
    {
      top : 150,
      left : 150,
      right : 300,
      bottom : 300
    }
  }
  show()
  {
    fill(76, 76, 76);
    strokeWeight(2);
    for(let i = 0; i < 4; i++)
    {
      rect(150, 150 + i*50, 50, 50);
      rect(200, 150 + i*50, 50, 50);
      rect(250, 150 + i*50, 50, 50);
      rect(300, 150 + i*50, 50, 50);
    }
  }
}
