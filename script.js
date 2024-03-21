document.addEventListener("DOMContentLoaded", function() {
    var pl_id = 'planet';
    var image = new Image();
    image.src = "img/mercuryK.jpg";
  
    var fxShadow = new Image();
	  fxShadow.src = 'img/sd.png';

    var canvas = document.getElementById(pl_id);
    var id = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
  
    var newMoveWidth = 0;
    var newMoveHeight = 0;
  
    var drawPl = function() {
      id.clearRect(0, 0, width, height);//очищаем область canvas, чтобы удалить лишние отрисованные элементы
  
      var beta = 360 / 900;//угол поворота планеты на каждый кадр анимации
      var betaRadians = (beta * Math.PI) / 180;//перевод в радианы
      var l = Math.sqrt(width * width + width * width) / 2;//расстояние от центра canvas до планеты
      var gam = Math.PI - ((Math.PI - betaRadians) / 2) - (Math.PI / 4);//угол для определения координат планеты canvas
      var b = 2 * l * Math.sin(betaRadians / 2);//длина стороны квадрата, вписанного в окружность орбиты планеты
      var x = b * Math.sin(gam);
      var y = b * Math.cos(gam);//координаты  планеты на canvas вычисленныве в b и gam
      var p1 = Math.cos(betaRadians);
      var p2 = Math.sin(betaRadians);//коэффициенты трансформации

      id.save();
      id.transform(p1, p2, -p2, p1, x, -y);
      id.drawImage(image, newMoveWidth, newMoveHeight, width, height, 0, 0, width, height);
      id.drawImage(fxShadow, -1, 0, width, height);
      id.restore();
  
      if (newMoveWidth >= 899.5) {// достигла ли планета края canvas по горизонтали, если да, то планета перемещается в анчальную позицию, иначе двигается вправо
        newMoveWidth = 0;
      } else {
        newMoveWidth += 0.5;
      }
    };
  
    setInterval(drawPl, 55);
  });