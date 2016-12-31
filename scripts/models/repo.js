'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.when(
     $.get('/github/user/repos?type=owner')
      .then(function(data) {
        reposObj.allRepos = data;
      }),
       $.get('/github/user/followers')
       .then(function(data) {
         // NOTE: since the 'data' paramter comes back as an
         // array of objects, we can reassign allRepos below.
         reposObj.followers = data;
       })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
