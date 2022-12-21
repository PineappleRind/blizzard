export default class Snowflake {
  constructor(options) {
    // Crucial values
    this.random = Math.random();
    this.startX = Math.floor(Math.random() * window.innerWidth);
    // User settings
    this.respawn = options.respawn || 1;
    this.fallSpeed = (options.fallSpeed || 0.5) + Math.random(); // px/sec
    this.movement = options.movement || 20; // x sine intensity
    // Position determiners 
    this.pos = {
      x: null,
      y: 0 + -this.random * (window.innerHeight * this.respawn),
      // from 0 to 4
      z: Math.round(Math.random() * 4),
    };
  }

  update(tick) {
    // fall
    this.pos.y += this.fallSpeed;
    // oscillate
    this.pos.x =
      this.startX +
      Math.sin(tick / (30 + this.random * 20) + this.random) * this.movement;
    // respawning behaviour
    if (this.pos.y > window.innerHeight * this.respawn)
      this.pos.y = -this.random * (window.innerHeight * this.respawn);
  }
}
