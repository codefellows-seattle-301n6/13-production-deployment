'use strict';

(function(module) {
  var newController = {
    index: function() {
      $('#ajax-spinner').hide();
      $('.tab-content').hide();
      $('#write').fadeIn();
    }
  };

  module.newController = newController;
})(window);
