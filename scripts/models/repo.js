'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.get(
      '/github/user/repos' +
      '?per_page=10' +
      '&sort=updated'
    )
    .then(function(data) {
      console.log(data, 'this is the data');
      // NOTE: since the 'data' paramter comes back as an
      // array of objects, we can reassign allRepos below.
      reposObj.allRepos = data;
    });

    $.get(
      '/github/user/repos/followers' +
      '?per_page=5' +
      '&sort=updated'
    )
    .then(function(data) {
      reposObj.followers = data;
      if (callback) callback();
    });
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
