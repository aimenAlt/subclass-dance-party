
var makeDjSpongeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://media.giphy.com/media/IzVwOO8xZsfks/giphy.gif" class="dancerSponge">');
  // https://media.giphy.com/media/3ohryhLGwtyIGy1ibS/giphy.gif
  // this.$node = $('<img src="https://media.giphy.com/media/3ohryhLGwtyIGy1ibS/giphy.gif" class="dancerSponge">');
  this.setPosition(top, left);
  this.isGrowing = false;
};

makeDjSpongeDancer.prototype = Object.create(makeDancer.prototype);
makeDjSpongeDancer.prototype.constructor = makeDjSpongeDancer;
makeDjSpongeDancer.prototype.oldStep = makeDancer.prototype.step;

makeDjSpongeDancer.prototype.grow = function() {
  if (this.$node.hasClass('shouldGrow')) {
    this.$node.removeClass('shouldGrow');
  } else {
    this.$node.addClass('shouldGrow');
  }
};

makeDjSpongeDancer.prototype.step = function() {
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.isGrowing) {
    this.grow();
  }  
};