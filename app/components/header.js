import Component from '@ember/component';

export default Component.extend({
  tagName: 'header',

  classNames: ["page-header"],

  logoGridWidth: null,
  logoGridHeight: null,

  image: null,
  canvas: null,
  canvasContext: null,
  timeoutHandle: null,

  // initialize() {
  //   // this.set('timeoutHandle', !1);
  //   // window.addEventListener("resize", this.clearAndSetTimeout(this), !1);
  //   // this.onResize(this);
  //
  //   var a = !1;
  //   window.addEventListener("resize", () => {
  //     clearTimeout(a), a = setTimeout(this.onResize, 500)
  //   }, !1), this.onResize()
  //
  // },
  //
  // clearAndSetTimeout(subject) {
  //   clearTimeout(subject.get('timeoutHandle'));
  //   subject.set('timeoutHandle', setTimeout(this.onResize, 500));
  // },
  //
  onResize() {
    let canvas = this.get('canvas');
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    this.set('canvas', canvas);

    this.draw();
  },

  randomOpacity() {
    let a = .65,
      n = 0,
      i = Math.random() * (a - n) + n;
    let c = this.get('canvasContext');
    c.globalAlpha = i;
  },

  drawGrid() {
    let canvas = this.get('canvas');
    let c = this.get('canvasContext');
    let image = this.get('image');
    for (var a = 0, n = 0, i = 125, e = 77, o = 0, r = .55 * i, t = .55 * e, d = 72, g = 1.15 * r, s = 2 * t; o < canvas.width;) {
      for (var v = 0; v < canvas.height;) {
        this.randomOpacity();
        var a = a + Math.floor(Math.random() * d) * i;
        c.drawImage(image, a, n, i, e, o, v, r, t);
        var a = 0,
          v = v + s
      }
      var o = o + g
    }
    for (var o = -g / 2; o < canvas.width;) {
      for (var v = s / 2; v < canvas.height;) {
        this.randomOpacity();
        var a = a + Math.floor(Math.random() * d) * i;
        c.drawImage(image, a, n, i, e, o, v, r, t);
        var a = 0,
          v = v + s
      }
      var o = o + g
    }
  },

  draw() {
    if (!this.get('image.complete')) return setTimeout(() => {
      this.draw()
    }, 5);
    // }, 5), void console.log("Images loading...");
    // console.log("Images loaded.");
    this.drawGrid();
  },

  didInsertElement() {
    this._super(...arguments);

    let canvas = document.getElementById("logo-grid");
    // let canvasDrawing = document.getElementById("logo-grid");
    // Modernizr.smil || (canvasDrawing.style.display = "none");

    let canvasContext = canvas.getContext("2d");

    let image = new Image;

    image.src = "../images/global/logo-grid-black.svg";

    this.set('canvas', canvas);
    this.set('canvasContext', canvasContext);
    this.set('image', image);

    this.onResize();
    // this.initialize();
  },

  // willDestroyElement() {
  //   this.element.removeEventListener('resize');
  //   // this.element.removeEventListener('resize', this.clearAndSetTimeout, !1);
  //   this._super(...arguments);
  // }

});
