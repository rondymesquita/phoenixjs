//Filter to list posts by category
angular.module('PhoenixCMS').filter('byCategory',byCategoryFilter);

function byCategoryFilter(config) {
  return function(data, category){
      var posts = [];
      $.each(data, function(index, value){
          //create friendly url
          data[index]["url"] = GenerateFriendlyUrl(data[index]);

          //get post by categories
          for(var i = 0; i < data[index].categories.length; i++){
              if(category === data[index].categories[i]){
                  posts.push(data[index]);
              }
          }

      });
      return posts;
  };
}
