export default class Snowflake {
  constructor(options) {
    this.initX = Math.floor(Math.random() * window.innerWidth);
    this.respawn = options.respawn || 1;
    this.random = Math.random();
    this.pos = {
      x: null,
      y: 0 + -this.random * (window.innerHeight * this.respawn),
      // from 0 to 4
      z: options.zPos || Math.round(Math.random() * 4),
    };
    this.fallSpeed = (options.fallSpeed || 0.5) + Math.random(); // px/sec
    this.movement = options.movement || 20; // x sine intensity
    this.size = options.size || 1;
    this.dimness = 1;
  }

  update(tick) {
    this.pos.y += this.fallSpeed;
    this.pos.x =
      this.initX +
      Math.sin(tick / (30 + this.random * 20) + this.random) * this.movement;

    if (this.pos.y > window.innerHeight * this.respawn)
      this.pos.y = -this.random * (window.innerHeight * this.respawn);
  }
}
