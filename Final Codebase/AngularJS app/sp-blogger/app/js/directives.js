'use strict'

angular.module('spBlogger.directives',[]);

angular.module('spBlogger.directives').directive('appVersion',['version',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
}]);