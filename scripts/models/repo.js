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
        reposObj.followers = data;
      })
    ).done(callback)
  };

  // reposObj.requestRepos = function(callback) {
  //   let reqOne = $.get('/github/user/repos?type=owner')
  //   let reqTwo = $.get('/github/user/followers')
  //
  //   $.when(reqOne, reqTwo).done((resOne, resTwo) => {
  //     reposObj.allRepos = resOne[0]
  //     reposObj.followers = resTwo[0]
  //     if (callback) callback()
  //   })
  // };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
