'use strict'

angular.module('spBlogger',[
	'spBlogger.posts',
	'spBlogger.controllers',
	'spBlogger.directives',
	'spBlogger.filters',
	'spBlogger.services',
	'ui.router'
]);

angular.module('spBlogger').value('version','V1.0');

angular.module('spBlogger').run(['$state',function($state){
	console.log('in run');
	$state.go('allPosts');
}]);
