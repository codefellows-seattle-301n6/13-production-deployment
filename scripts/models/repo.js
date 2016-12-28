'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.when(
      $.get('/github/user/repos' +
      '?per_page=10' +
      '&sort=updated')
      .then(function(data) {
        // NOTE: since the 'data' paramter comes back as an
        // array of objects, we can reassign allRepos below.
        reposObj.allRepos = data;
      })
    ),
    $.get('/github/users/patci/followers' +
    '?per_page=5' +
    '&sort=updated')
    .then(function(data) {
      reposObj.followers = data;
    })
    .done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
