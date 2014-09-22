'use strict'

angular.module('spBlogger',['ngCookies','ngSanitize','ngResource','ngAnimate','ui.router','pascalprecht.translate','spBlogger.admin','spBlogger.posts','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services']);

angular.module('spBlogger').config(['$translateProvider','$httpProvider',function($translateProvider,$httpProvider){
    $translateProvider.translations('en', {
        TITLE: 'The Single Page Blogger',
        SUBTITLE: 'One Stop Blogging Solution',
        COMMENTS: 'Comments',
        BY:'By',
        ADD:'Add'
    });

    $translateProvider.translations('de', {
        TITLE: 'Single Page Blogger',
        SUBTITLE: 'Die Komplettlösung für Ihr Blog',
        COMMENTS: 'Kommentare',
        BY:'Von',
        ADD:'Hinzufügen'
    });

    $translateProvider.preferredLanguage('en');

    $httpProvider.defaults.withCredentials = true;

}]);

angular.module('spBlogger').run(['$state','$rootScope','$translate',function($state,$rootScope,$translate){

      $state.go('allPosts');

      $rootScope.languagePreference={currentLanguage:'en'};

      $rootScope.languagePreference.switchLanguage=function(key){
          $translate.use(key);
          $rootScope.languagePreference.currentLanguage=key;
      }
}]);