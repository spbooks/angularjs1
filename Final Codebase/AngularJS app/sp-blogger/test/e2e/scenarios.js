'use strict';

describe('The Single Page Blogger E2E Test', function() {

  browser.get('/');
  
  protractor = protractor.getInstance();

  it('should have 2 posts', function() {
	 var posts = element.all(by.repeater('post in posts'));
	 expect(posts.count()).not.toBe(null);
  });

    /*
     * You can change the following test to point to your first post URL.
     *
     */
  
  it('Should redirect to #/posts/55/demo-post', function() {
    var posts = element.all(by.repeater('post in posts'));
    posts.first().then(function(postElem) {
		postElem.findElement(by.tagName('a')).then(function(a) {
		      a.click();
			  expect(protractor.getCurrentUrl()).toMatch('http://localhost:8000/#/posts/55/demo-post');
		});
    });
  });
  
});