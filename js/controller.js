app.controller("PostList", function($scope){

  $scope.post = [
    {
      title: 'Outside Aspen, CO',
      image: 'http://www.gtlc.com/media/1400/camping-2.jpg',
      upvotes: 0,
      author: 'Ned Stark',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date,
      comments: [
        {
          author: 'Penguin',
          comment: 'It was way too hot. No snow anywhere.'
        }
      ],
    },
    {
      title: 'Hike Through Zion Falls',
      image: 'https://www.visitnc.com/resimg.php/imgcrop/2/35245/image/800/448/CampingEnoRiver.jpg',
      upvotes: 0,
      author: 'Tyrion Lannister',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date("2016-07-19T16:19:53.155Z"),
      comments: [
        {
          author: 'Bear',
          comment: 'GREAT food selection! Everything from adults to children, including teenagers.'
        }
      ],
    },
    {
      title: 'Olympic National Park',
      image: 'http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011.jpg',
      upvotes: 0,
      author: 'Bear Grylls',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date("2016-07-18T16:19:53.155Z"),
      comments: [
        {
          author: 'Sloth',
          comment: 'Never got out of the parking lot, but I hear it is a great hike.'
        }
      ],
    },
    {
      title: 'Cliffs of Moher',
      image: 'http://images.huffingtonpost.com/2015-03-19-1426803829-9735139-8f524af8ef2b50a4dab24786229c28c11.jpg',
      upvotes: 0,
      author: 'Cersei Lannister',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: new Date("2016-07-17T16:19:53.155Z"),
      comments: [
        {
          author: 'Goat',
          comment: 'Cliffs is good. Good on my hoovesies.'
        }
      ],
    }
  ];

  $scope.upvote = function(posts){
    posts.upvotes += 1;
  }
  $scope.downvote = function(posts){
    posts.upvotes -= 1;
  }
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

  // $scope.addNewPost = false;
  $scope.togglePostView = function() {
    if ($scope.addNewPost === false) {
      $scope.addNewPost = true;
    } else {
      $scope.addNewPost = false;
    }
  };

  $scope.addNewComment = function(posts, addComment){
    posts.comments.push({
      author: addComment.author,
      comment: addComment.comment,
      date: new Date()
    })
  }
})
