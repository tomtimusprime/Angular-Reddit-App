const app = angular.module('flapperNews', []);

app.factory('posts', [function() {
    var o = {
        posts: []
    }
    return o;
}])

app.controller('MainCtrl', [
    '$scope',
    'posts',
    function ($scope, posts) {
        $scope.posts = posts.posts;
        $scope.addPost = function () {
            if(!$scope.title || $scope.title === '') {return;}
            $scope.posts.push({ 
                title: $scope.title, 
                link: $scope.link,
                upvotes: 0 });
            $scope.title = '';
            $scope.link = '';
        }
        $scope.incrementUpvotes = function(post) {
            post.upvotes+=1;
        }
    }]);

    // [
    //     { title: 'post1', upvotes: 5 },
    //     { title: 'post2', upvotes: 10 },
    //     { title: 'post3', upvotes: 15 },
    //     { title: 'post4', upvotes: 6 },
    //     { title: 'post5', upvotes: 9 },
    //     { title: 'post6', upvotes: 7 }
    // ];