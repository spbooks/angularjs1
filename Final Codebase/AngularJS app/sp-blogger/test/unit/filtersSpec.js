'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('spBlogger.admin.filters'));


  describe('Permalink Filter Test\n', function() {

    it('Should Replace all spaces with hyphens and convert to lowercase', inject(function(permalinkFilter) {
      expect(permalinkFilter('I had 3 spaces')).toEqual('i-had-3-spaces');
    }));

  });

  describe('Wordcount Filter Test\n', function() {

    it('Should count the number of words as 3', inject(function(wordcountFilter) {
        expect(wordcountFilter('Three words here')).toEqual(3);
    }));

  });

});