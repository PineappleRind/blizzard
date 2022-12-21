import Snowflake from "./Snowflake.js";
import renderers from "./renderers/index.js";

export default class Blizzard {
  constructor(options) {
    let renderer = 'dom';
    if (options.sky.tagName === 'CANVAS') renderer = 'canvas';
    
    this.renderer = new renderers[renderer](options);

    this.snowflakes = [];
    for (let i = 0; i < options.amount; i++)
      this.snowflakes.push(new Snowflake(options));

    this.tick = 0;
    this.playing = false;

    return this;
  }

  play() {
    this.playing = true;
    this.frame();

    return this;
  }

  pause() {
    this.playing = false;

    return this;
  }

  frame() {
    if (!this.playing) return;
    this.tick++;
    this.renderer.render(this.snowflakes, this.tick);

    window.requestAnimationFrame(this.frame.bind(this));
  }
}
