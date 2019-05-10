class Tile {
  constructor(x, y, lvl) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.lvl = lvl;
    this.color = this.pickColor();
    this.blocked = false;
    this.easing = 0.05;
  }
  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    fill(this.color);
  }
  blockKeys() {}
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      targetX = this.x - (this.x - 150) - 1;
    } else if (keyIsDown(RIGHT_ARROW)) {
      targetX = this.x + (300 - this.x) + 1;
    } else if (keyIsDown(UP_ARROW)) {
      targetY = this.y - (this.y - 150) - 1;
    } else if (keyIsDown(DOWN_ARROW)) {
      targetY = this.y + (300 - this.y) + 1;
    }

    // calculate the new xpos value
    var dx = targetX - this.x;
    if (abs(dx) > 1) {
      this.x += dx * this.easing;
    }

    // calculate the new ypos value
    var dy = targetY - this.y;
    if (abs(dy) > 1) {
      this.y += dy * this.easing;
    }
  }
  check_edges() {
    if (this.x > 300) {
      console.log("Hit left!");
      click_sound.play();
      this.x = 300;
    } else if (this.x < 150) {
      console.log("Hit right!");
      click_sound.play();
      this.x = 150;
    } else if (this.y < 150) {
      console.log("Hit top!");
      click_sound.play();
      this.y = 150;
    } else if (this.y > 300) {
      console.log("Hit bottom!");
      click_sound.play();
      this.y = 300;
    }
  }
  check_collisions() {
    //FIXME!!!
    for (let i = 0; i < Tiles.length; i++) {
      if (this == Tiles[i]) {
        //console.log("cant hit myself!");
        return;
      }
      if (dist(this.x, this.y, Tiles[i].x, Tiles[i].y) < 40) {
        if (this.lvl == Tiles[i].lvl) {
          Tiles.splice(i, 1);
          score += 2 * this.lvl;
          console.log(score);
          this.lvl += 1;
          this.color = this.pickColor();
          yeah_sound.play();
          console.log("UNITED!");
        } else {
          if (this.x > Tiles[i].x) {
            this.x = Tiles[i].x + 50;
            this.blocked = true;
            console.log("blocked");
          }
          if (this.x < Tiles[i].x) {
            this.x = Tiles[i].x - 50;
            this.blocked = true;
            console.log("blocked");
          }
        }
        console.log("HIT another!");
      }
    }
  }
  pickColor() {
    //levels are for 1 - 2 - 4 - 8 - ... tiles
    switch (this.lvl) {
      case 1:
        return "rgb(164, 47, 237)";
      case 2:
        return "rgb(103, 9, 135)";
      case 3:
        return "rgb(0, 0, 255)";
      case 4:
        return "rgb(0, 255, 0)";
      case 5:
        return "rgb(233, 255, 40)";
      case 6:
        return "rgb(255, 187, 40)";
      case 7:
        return "rgb(255, 0, 0)";
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
