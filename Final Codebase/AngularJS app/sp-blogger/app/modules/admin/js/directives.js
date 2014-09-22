'use strict'

angular.module('spBlogger.admin.directives',[]).directive('onClickMakeActive',function(){
    return {
        restrict:'AEC',
        link: function(scope,elem,attrs){
            elem.find('li').bind('click',function(event){
                angular.element(event.currentTarget).addClass('active');
                angular.element(event.currentTarget).siblings('li').removeClass('active');
            });
        }
    }
})