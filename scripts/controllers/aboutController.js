'use strict';

(function(module) {
  var aboutController = {
    index: function(next) {
      $('#about').fadeIn().siblings().hide();
      next();
    }
  };

  module.aboutController = aboutController;
})(window);
