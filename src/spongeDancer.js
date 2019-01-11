
var makeSpongeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://media.giphy.com/media/9d1Fo0XyIYXzW/giphy.gif" class="dancerSponge">');
  this.setPosition(top, left);
};

makeSpongeDancer.prototype = Object.create(makeDancer.prototype);
makeSpongeDancer.prototype.constructor = makeSpongeDancer;
// makeSpongeDancer.prototype.oldStep = makeDancer.prototype.step;

makeSpongeDancer.prototype.step = function() {
  // this.oldStep();
  // // toggle() is a jQuery method to show/hide the <span> tag.
  // // See http://api.jquery.com/category/effects/ for this and
  // // other effects you can use on a jQuery-wrapped html tag.
  // if (this.isGrowing) {
  //   if (this.$node.hasClass('shouldGrow')) {
  //     this.$node.removeClass('shouldGrow');
  //   } else {
  //     this.$node.addClass('shouldGrow');
  //   }
  // }
};