'use strict';

(function(module) {
  var articleController = {
    index: function() {
      $('.tab-content').hide();
      $('#articles').fadeIn();
    }
  };

  module.articleController = articleController;
})(window);
