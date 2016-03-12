
/*
 * Filter to list posts by category
 */
phoenix.filter('byCategory',byCategoryFilter);

function byCategoryFilter(config) {
  return function(data, category){
      var posts = [];
      posts = GetPostsByCategory(data, category);
      return posts;
  };
}
