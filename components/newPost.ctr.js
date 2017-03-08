

$scope.addNewPost = function(){
  $scope.post.push({
    title: $scope.addPost.title,
    image: $scope.addPost.image,
    author: $scope.addPost.author,
    description: $scope.addPost.description,
    upvotes: 0,
    date: new Date()
  });
}
$scope.addPost = {};
