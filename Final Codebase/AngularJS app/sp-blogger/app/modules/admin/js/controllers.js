'use strict'

angular.module('spBlogger.admin.controllers',[]).controller('PostCreationController',['$scope','$state','Post',function($scope,$state,Post){

    $scope.post=new Post();

    $scope.buttonText="Create";

    $scope.savePost=function(){
        $scope.buttonText="Saving. . .";
        $scope.post.permalink=angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
        $scope.post.$save(function(){
            $state.go('admin.postViewAll');
        });
    }

}]).controller('PostUpdateController',['$scope','Post','$stateParams','$state',function($scope,Post,$stateParams,$state){

    $scope.post=Post.get({id:$stateParams.id});

    $scope.buttonText="Update";

    $scope.updatePost=function(){
        $scope.buttonText="Updating. . .";
        $scope.post.$update(function(){
           $state.go('admin.postUpdate',{id:$stateParams.id},{reload:true});
        });
    }

}]).controller('PostListController',['$scope','Post','popupService','$state',function($scope,Post,popupService,$state){

    $scope.posts=Post.query();

    $scope.deletePost=function(post){
        if (popupService.showPopup('Really delete this?')) {
            post.$delete(function() {
                $state.go('admin.postViewAll',undefined,{
                    reload:true
                });
            });
        }
    }

}]).controller('LoginController',['$scope','authService','$state',function($scope,authService,$state){

    $scope.buttonText="Login";

    $scope.login=function(){

        $scope.buttonText="Logging in. . .";

        authService.login($scope.credentials.username,$scope.credentials.password).then(function(data){
            $state.go('admin.postViewAll');
        },function(err){
            $scope.invalidLogin=true;
        }).finally(function(){
            $scope.buttonText="Login";
        });
    }
}]).controller('AdminController',['$scope','authService','$state','user',function($scope,authService,$state,user){

    $scope.logout=function(){
        authService.logout().then(function(){
            $state.go('login');
        });
    }
}]);