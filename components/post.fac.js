(function(){
  "use strict";
  angular
    .module("redditClone")
    .factory("postFactory", function($http) {
      function getPosts() {
        return $http.get('data/posts.json');
      }
      return {
        getPosts: getPosts
      }
    })
})();
