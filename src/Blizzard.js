import Snowflake from "./Snowflake.js";
import renderers from "./renderers/index.js";

export default class Blizzard {
    constructor(options) {
        this.renderer = new renderers[options.renderer.type || 'canvas'](options);
        if (!this.renderer) throw new Error(`Blizzard: No renderer found with name ${options.renderer}.`)

        this.snowflakes = [];
        for (let i = 0; i < options.amount; i++) {
            this.snowflakes.push(new Snowflake(options))
        }

        this.tick = 0;

        return this;
    }

    // start function is either next frame or nothing
    start = this.playing ? void 0 : this.frame

    frame() {
        this.tick++;
        this.renderer.render(this.snowflakes, this.tick);
        return window.requestAnimationFrame(this.frame.bind(this))
    }
}