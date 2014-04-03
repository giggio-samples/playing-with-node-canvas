var fs = require('fs');
var Canvas = require('canvas');
var Image = Canvas.Image;
var canvas = new Canvas(200, 200);
var ctx = canvas.getContext('2d');

var usingBuffer = function() {
  fs.readFile(__dirname + '/untitled.png', function(err, bytes){
    if (err) throw err;
    img = new Image;
    img.onload = function() {
      ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
      console.log(canvas.toDataURL('image/png'));
    }
    img.src = bytes;
  });
}

var usingFileName = function() {
  img = new Image;
  img.onload = function() {
    ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4);
    console.log(canvas.toDataURL('image/png'));
  }
  img.src = __dirname + '/untitled.png'
}

usingFileName();
usingBuffer();
