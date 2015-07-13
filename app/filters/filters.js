
/*
 * Filter to list posts by category
 */
angular.module('PhoenixCMS').filter('byCategory',byCategoryFilter);

function byCategoryFilter(config) {
  return function(data, category){
      var posts = [];
      posts = GetPostsByCategory(data, category);
      return posts;
  };
}
