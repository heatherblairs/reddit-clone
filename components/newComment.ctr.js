$scope.addNewComment = function(posts, addComment){
  posts.comments.push({
    author: addComment.author,
    comment: addComment.comment,
    date: new Date()
  })
}
