function food () {
  this.x = floor(random(width/scl)) * scl;
  this.y = floor(random(height/scl)) * scl;
  this.c = [0, 0, 0]
  
  
  this.newLocation = function() {
    this.c = [0, 0, 0];
    this.x = floor(random(width/scl)) * scl;
    this.y = floor(random(height/scl)) * scl;
  }
  
  this.show = function() {
    fill(this.c);
    rect(this.x, this.y, scl, scl);
    /*
    if (this.c[0] < 255) {
      this.c[0] += 8;
    } else if (this.c[1] < 255) {
      this.c[1] += 8;
    } else if (this.c[2] < 255) {
      this.c[2] += 8;
    } else {
      this.c = [0, 0, 0]
    }
    */
  }
}