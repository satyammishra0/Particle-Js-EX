// Target -- where we want to take our page on click ||| target place target div
// Duaration --  Duration we want that how much time it should take in scrolling

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startingPosition = window.pageYOffset;
  var distance = targetPosition - startingPosition;
  var startTime = null;

  console.log(targetPosition);
  console.log(startingPosition);
  function animationScroll(currentTime) {
    if (startTime == null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = easeInOutSine();
  }

  function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  requestAnimationFrame(animationScroll);
}

smoothScroll(".section-2", 1000);
