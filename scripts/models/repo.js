'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    let reqOne = $.get('/github/user/repos?type=owner')
    let reqTwo = $.get('/github/user/followers')

    $.when(reqOne, reqTwo).done((resOne, resTwo) => {
      reposObj.allRepos = resOne[0]
      reposObj.followers = resTwo[0]
      if (callback) callback()
      // NOTE: since the 'data' paramter comes back as an
      // array of objects, we can reassign allRepos below.
    })
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
