
/*
 * Filter to list posts by category
 */
phoenix.filter('byCategory', byCategoryFilter);

function byCategoryFilter(config) {
      var phoenixFunctions = new PhoenixFunctions();
      return function(data, category){
          var posts = [];
          posts = phoenixFunctions.getPostsByCategory(data, category);
          return posts;
      };
}
