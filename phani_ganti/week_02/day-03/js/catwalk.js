var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
var direction='forward';

// Function to move the cat backwards
var moveKittyReverse = function(){
var oldRight = parseInt(img.style.left);
    console.log(oldRight);
    var newRight = oldRight - 5;
    img.style.left = newRight + 'px';
    if (newRight === 0) {
      window.clearInterval(stopTheCat2);
      img.style.transform="scale(1,1)";
      direction='forward';
    }
};
 var stopTheCat2 = window.setInterval(moveKittyReverse, 50);

// Function to move the cat Forward
var moveKittyForward = function(){
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 5;
  img.style.left = newLeft + 'px';

    if(newLeft >= window.innerWidth) {
      window.clearInterval(stopTheCat1);
      img.style.transform="scale(-1,1)";
      direction='reverse';
      }

};
var stopTheCat1 = window.setInterval(moveKittyForward, 50);

var moveKitty = function(){

   if(direction==='forward') {
     moveKittyForward();
   }
   if (direction === 'reverse'){
     moveKittyReverse();
    }
};
var stopTheCat = window.setInterval(moveKitty, 50);
