document.addEventListener("DOMContentLoaded", function() {
    var pl_id = 'planet';
    var image = new Image();
    image.src = "img/earthK.jpg";
  
    var fxShadow = new Image();
	  fxShadow.src = 'img/sd.png';

    var canvas = document.getElementById(pl_id);
    var id = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
  
    var newMoveWidth = 0;
    var newMoveHeight = 0;
  
    var drawPl = function() {
      id.clearRect(0, 0, width, height);
  
      var beta = 360 / 900;
      var betaRadians = (beta * Math.PI) / 180;
      var l = Math.sqrt(width * width + width * width) / 2;
      var gam = Math.PI - ((Math.PI - betaRadians) / 2) - (Math.PI / 4);
      var b = 2 * l * Math.sin(betaRadians / 2);
      var x = b * Math.sin(gam);
      var y = b * Math.cos(gam);
      var p1 = Math.cos(betaRadians);
      var p2 = Math.sin(betaRadians);

      id.save();
      id.transform(p1, p2, -p2, p1, x, -y);
      id.drawImage(image, newMoveWidth, newMoveHeight, width, height, 0, 0, width, height);
      id.drawImage(fxShadow, -1, 0, width, height);
      id.restore();
  
      if (newMoveWidth >= 899.5) {
        newMoveWidth = 0;
      } else {
        newMoveWidth += 0.5;
      }
    };
  
    setInterval(drawPl, 50);
  });