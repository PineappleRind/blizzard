export default class CanvasRenderer {
  constructor(options) {
    this.canvas = options.sky;
    this.ctx = this.canvas.getContext("2d");
  }

  render(snowflakes, tick) {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (const snowflake of snowflakes) {
      snowflake.update(tick);
      this.circle(
        snowflake.pos.x,
        snowflake.pos.y,
        snowflake.pos.z / 2 + 1,
      `hsla(0, 20%, 100%, ${snowflake.pos.z / 4}`
      );
    }
  }

  circle(x, y, rad, color) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.arc(x, y, rad, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
