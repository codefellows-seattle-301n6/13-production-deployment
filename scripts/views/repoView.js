'use strict';

(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#about .repos').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
    $('#about .followers').empty().append(
       reposObj.followers.map(followersCompiler)
     );
  };
  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
