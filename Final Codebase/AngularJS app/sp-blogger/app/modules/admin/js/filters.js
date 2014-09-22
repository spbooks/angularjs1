'use strict'

angular.module('spBlogger.admin.filters',[]).filter('permalink',function(){
    return function(title){
        return title===undefined ? '' : angular.lowercase(title).replace(/[\s]/g,'-');
    }
}).filter('wordcount',function(){
    return function(input){
        return input===undefined ? 0 : input.split(/\s/g).length;
    }
});