'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.when(
     $.ajax({
       url: 'https://api.github.com/user/repos' +
            '?per_page=10' +
            '&sort=updated',
       type: 'GET',
       headers: {
         Authorization: `token ${process.env.GITHUB_TOKEN}`
       },
       success: function(data) {
         // NOTE: since the 'data' paramter comes back as an
         // array of objects, we can reassign allRepos below.
         reposObj.allRepos = data;
       }
     }),
     $.ajax({
       url: 'https://api.github.com/users/patci/followers' +
            '?per_page=5' +
            '&sort=updated',
       type: 'GET',
       headers: {
         Authorization: `token ${process.env.GITHUB_TOKEN}`
       },
       success: function(data) {
         reposObj.followers = data;
       }
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
