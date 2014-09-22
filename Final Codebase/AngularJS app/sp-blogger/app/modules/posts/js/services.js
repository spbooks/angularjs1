'use strict'

angular.module('spBlogger.posts.services', []).factory('postService', function() {
  return {
    getAll: function() {
      return this.posts;
    },
    getPostById: function(id) {
      for (var i in this.posts) {
        if (this.posts[i].id == id) {
          return this.posts[i];
        }
      }
    },
  }
});