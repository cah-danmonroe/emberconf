function initialize() {
  var a = !1;
  window.addEventListener("resize", function() {
    clearTimeout(a), a = setTimeout(onResize, 500)
  }, !1), onResize()
}

function randomOpacity() {
  var a = .65,
    n = 0,
    i = Math.random() * (a - n) + n;
  c.globalAlpha = i
}

function drawGrid() {
  for (var a = 0, n = 0, i = 125, e = 77, o = 0, r = .55 * i, t = .55 * e, d = 72, g = 1.15 * r, s = 2 * t; o < canvas.width;) {
    for (var v = 0; v < canvas.height;) {
      randomOpacity();
      var a = a + Math.floor(Math.random() * d) * i;
      c.drawImage(image, a, n, i, e, o, v, r, t);
      var a = 0,
        v = v + s
    }
    var o = o + g
  }
  for (var o = -g / 2; o < canvas.width;) {
    for (var v = s / 2; v < canvas.height;) {
      randomOpacity();
      var a = a + Math.floor(Math.random() * d) * i;
      c.drawImage(image, a, n, i, e, o, v, r, t);
      var a = 0,
        v = v + s
    }
    var o = o + g
  }
}

function draw() {
  if (!image.complete) return setTimeout(function() {
    draw()
  }, 5), void console.log("Images loading...");
  console.log("Images loaded."), drawGrid()
}

function onResize() {
  canvas.width = window.innerWidth, canvas.height = window.innerHeight, draw()
}
var canvas = document.getElementById("logo-grid"),
  c = canvas.getContext("2d"),
  canvasDrawing = document.getElementById("logo-grid");
Modernizr.smil || (canvasDrawing.style.display = "none");
var image = new Image;
image.src = "../images/global/logo-grid-black.svg", initialize();
