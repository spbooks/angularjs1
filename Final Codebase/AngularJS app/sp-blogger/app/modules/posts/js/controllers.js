'use strict'

angular.module('spBlogger.posts.controllers',[]).controller('PostController',['$scope','Post',function($scope,Post){

	$scope.posts=Post.query();

}]).controller('PostDetailsController',['$stateParams','$state','$scope','Post',function($stateParams,$state,$scope,Post){

    $scope.closePost=function(){
        $state.go('allPosts');
    };

    $scope.singlePost=Post.get({id:$stateParams.id});

}]);