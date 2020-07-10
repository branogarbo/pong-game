function Ball() {
   this.x = windowWidth/2;
   this.y = windowHeight/2;
   this.radius = 200;

   this.velocity = 15;
   this.directionDeg = 10;
   this.directionRad = -this.directionDeg * Math.PI/180;
   this.velocityVector = [ this.velocity*Math.cos(this.directionRad), this.velocity*Math.sin(this.directionRad) ];

   this.display = () => {
      fill('blue');
      circle(this.x, this.y, this.radius*2);
   }

   this.update = () => {
      if (this.x < this.radius || this.x > windowWidth - this.radius) {
         this.bounce(true);
      }
      
      if (this.y < this.radius || this.y > windowHeight - this.radius) {
         this.bounce(false);
      }

      this.x += this.velocityVector[0];
      this.y += this.velocityVector[1];
   }
   
   this.bounce = isVertical => {
      isVertical ? this.directionRad = Math.PI - this.directionRad : this.directionRad *= -1;

      this.velocityVector = [ this.velocity*Math.cos(this.directionRad), this.velocity*Math.sin(this.directionRad) ];
   }
}