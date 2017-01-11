'use strict';

(function(module) {
  var aboutController = {
    index: function(ctx, next) {
      $('#about').fadeIn().siblings().hide();
      next();
    }
  };

  module.aboutController = aboutController;
})(window);
