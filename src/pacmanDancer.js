
var makePacmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://art.pixilart.com/df632599c62ec0a.gif" class="dancerSponge">');
  this.x = window.innerWidth / 2;
  this.y = 0;
  this.setPosition(this.y, this.x);
  this.isPacman = true;
};

makePacmanDancer.prototype = Object.create(makeDancer.prototype);
makePacmanDancer.prototype.constructor = makePacmanDancer;

makePacmanDancer.prototype.oldStep = makeDancer.prototype.step;

makePacmanDancer.prototype.increment = function() {
  this.y += 50;
  this.setPosition(this.y, this.x);
  
  for (var dancer of window.dancers) {
    if (dancer.isPacman === undefined) {
      if (Math.abs(dancer.top - this.y) < 200 && Math.abs(dancer.left - this.x) < 200) {
        dancer.$node.hide();
      }
    }
  }
};

makePacmanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  if (this.y < window.outerHeight) {
    this.increment();
  } else {
    this.$node.hide();
  }
};
