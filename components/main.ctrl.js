// better
  (function(){
    "use strict";
    angular
       .module("campSpots")
          .controller("mainCtrl", mainCtrl);

          mainCtrl.$inject = ['$scope', '$http', 'postFactory'];

          function mainCtrl($scope, $http, postFactory){
        postFactory.getPosts().then(function(posts){
          $scope.posts = posts.data;
        })
      }
  })();

// best
  // (function(){
  //   "use strict";
  //   angular
  //     .module("campSpots")
  //     .controller("mainCtrl", mainCtrl);
  //
  //     mainCtrl.$inject = ['$scope', '$http', 'postFactory'];
  //
  //     function mainCtrl($scope, $http, postFactory){
  //       var vm = this;
  //
  //       vm.post;
  //       vm.posts;
  //
  //       postFactory.getPosts().then(function(posts){
  //         vm.posts = posts.data;
  //       })
  //     }
  // })();
