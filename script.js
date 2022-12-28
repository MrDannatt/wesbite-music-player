var running = new Audio("running.mp3");
function runwater() {
   
  if (typeof running.loop == 'boolean')
  {
      running.loop = true;
  }
  else
  {
      running.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);
  }
  running.play();
}
function on() {
  document.getElementById("sink").src = "virtualsinkon.png";
  document.getElementById("onoff").href = "javascript:off()";
  runwater()
}
function off() {
  document.getElementById("sink").src = "virtualsinkoff.png";
  document.getElementById("onoff").href = "javascript:on()";
  running.pause();
}
function overflow() {
  
}