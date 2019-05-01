class Tile
{
  constructor(x, y, lvl)
  {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.lvl = lvl;
    this.color = this.pickColor();
    this.blocked_l = false;
    this.blocked_r = false;
    this.blocked_u = false;
    this.blocked_d = false;
  }
  show()
  {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    fill(this.color);
  }
  move()
  {
    if(keyIsDown(LEFT_ARROW) && !this.blocked_l)
    {
      this.x -= 5;
    }
    else if(keyIsDown(RIGHT_ARROW) && !this.blocked_r)
    {
      this.x += 5;
    }
    else if(keyIsDown(UP_ARROW) && !this.blocked_u)
    {
      this.y -= 5;
    }
    else if(keyIsDown(DOWN_ARROW) && !this.blocked_d)
    {
      this.y += 5;
    }
  }
  check_edges()
  {
    if(this.x > 300)
    {
      console.log("Hit left!");
      this.x = 300;
    }
    else if(this.x < 150)
    {
      console.log("Hit right!");
      this.x = 150;
    }
    else if(this.y < 150)
    {
      console.log("Hit top!");
      this.y = 150;
    }
    else if(this.y > 300)
    {
      console.log("Hit bottom!");
      this.y = 300;
    }
  }
  check_collisions() //FIXME!!!
  {
    for(let i = 0; i < Tiles.length; i++)
    {
      if(this.x + 50 == Tiles[i].x  && this != Tiles[i])
      {
        if(this.lvl == Tiles[i].lvl)
        {
          console.log("UNITED!");
          Tiles.splice(i, 1);
          this.lvl += 1;
          this.color = this.pickColor();
        }
        // this.blocked_r = true;
        console.log("HIT another!");
      }
      else if(this.y == Tiles[i].y + 50 && this != Tiles[i])
      {
        if(this.lvl == Tiles[i].lvl)
        {
          console.log("UNITED!");
          Tiles.splice(i, 1);
          this.lvl += 1;
          this.color = this.pickColor();
        }
        // this.blocked_l = true;
        console.log("HIT another!");
      }
      // if(this.y == Tiles[i].y + 50 && this != Tiles[i])
      // {
      //   this.y = Tiles[i].y;
      //   console.log("HIT another!");
      // }
      // else if(this.y == Tiles[i].y - 50 && this != Tiles[i])
      // {
      //   this.y = Tiles[i].y;
      //   console.log("HIT another!");
      // }
    }
  }
  pickColor() //levels are for 1 - 2 - 4 - 8 - ... tiles
  {
    switch(this.lvl)
    {
      case 1:
        return 'rgb(164, 47, 237)';
      case 2:
        return 'rgb(103, 9, 135)';
      case 3:
        return 'rgb(0, 0, 255)';
      case 4:
        return 'rgb(0, 255, 0)';
      case 5:
        return 'rgb(233, 255, 40)';
      case 6:
        return 'rgb(255, 187, 40)';
      case 7:
        return 'rgb(255, 0, 0)';
      // case 8:
      //   return (164, 47, 237);
      // case 9:
      //   return (164, 47, 237);
      // case 10:
      //   return (164, 47, 237);
      // case 11:
      //   return (164, 47, 237);
      // case 12:
      //   return (164, 47, 237);
      default:
        break;
    }
  }
}
