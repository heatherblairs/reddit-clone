(function(){
  "use strict";
  angular
    .module("campSpots")
    .factory("postFactory", function($http){
      function getPosts(){
        return $http.get('data/posts.json');
      }
      return {
        getPosts: getPosts
      }
    })
})();
