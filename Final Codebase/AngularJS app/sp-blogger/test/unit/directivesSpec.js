'use strict';

/* jasmine specs for directives go here */

beforeEach(module('spBlogger.posts.directives'));
beforeEach(module('spBlogger.admin.services'));
beforeEach(module('templates'));
beforeEach(module('pascalprecht.translate'));

describe('Directive Test\n', function(){

    it('Should initialize comments div with 2 comments', inject(function($rootScope,$compile) {

        var $scope=$rootScope.$new(); //Create a new scope

        $scope.singlePost={comments:[{content:'test',author:'test'},{content:'test1',author:'test1'}]}; // Fake comments array in a fake post instance

        var template='<spb-comments post-instance="singlePost"></spb-comments>'; // This our markup which uses the directive

        var elem=angular.element(template); // wrap the element with jQuery as $compile service compiles DOM and not a String

        $compile(elem)($scope); // Link it with proper scope

        $rootScope.$digest(); // Fire a digest so that expressions are evaluated

        expect(elem.find('.single-comment').length).toBe(2); // Expect number of comments to be 2
    }));

});