(function(){
  "use strict";
  angular
    .module("redditClone")
    .controller("mainCtrl", function($scope, $http, postFactory){
      var vm = this;

      vm.posts;

      function upvote(posts){
        posts.upvotes += 1;
      }
      function downvote(posts){
        posts.upvotes -= 1;
      }

    })
})

app.controller("PostList", function($scope){

  $scope.upvote = function(posts){
    posts.upvotes += 1;
  }
  $scope.downvote = function(posts){
    posts.upvotes -= 1;
  }

  $scope.togglePostView = function() {
    if ($scope.addNewPost === false) {
      $scope.addNewPost = true;
    } else {
      $scope.addNewPost = false;
    }
  };


})();
