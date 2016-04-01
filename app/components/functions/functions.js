function PhoenixFunctions(){}
PhoenixFunctions.prototype = {
    /*
     * Remove acentuation
     */
    encodeString: function(s){
        var r = s.toString().toLowerCase();
        non_asciis = {
            'a': '[àáâãäå]',
            'ae': 'æ',
            'c': 'ç',
            'e': '[èéêë]',
            'i': '[ìíîï]',
            'n': 'ñ',
            'o': '[òóôõö]',
            'oe': 'œ',
            'u': '[ùúûűü]',
            'y': '[ýÿ]'
        };
        for (var i in non_asciis) {
            // console.log(i);
            r = r.replace(new RegExp(non_asciis[i], 'g'), i);
        }
        return r.toLowerCase();
    },

    /*
     * Generate a friendly url to post based on title
     */
    generateFriendlyUrl: function(post){
        var titleWithoutAccentuations = this.encodeString(post.title);
        console.log(titleWithoutAccentuations);
        var titleWithoutPontuation = titleWithoutAccentuations.replace(/[^\w\s]/g,"");
        console.log(titleWithoutPontuation);
        return this.encodeString(post.title);
    },

    /*
     * Get posts by given json posts and category
     */
    getPostsByCategory: function(posts, category){
        var result = [];

        posts.forEach(function(post){

            post.url = GenerateFriendlyUrl(post);

            for(var i = 0; i < post.categories.length; i++){
                if(category === post.categories[i]){
                    result.push(post);
                }
            }

        });

      return result;
  },

  /*
   * Get posts by given json posts and id
   */
  getPostById: function(posts, id){
      posts.forEach(function(post){
          post.url = GenerateFriendlyUrl(post);
      });
      return posts[id-1];
  },

  /*
   * Get posts by given json posts and search
   */
  getPostsBySearch: function(posts, search){

      search = EncodeString(search);
      var result = [];

      posts.forEach(function(post){
          var insertThisPost = false;

          var value;
          for(var attr in post){
              value = EncodeString(post[attr]);

              if(value.indexOf(search) != -1){
                  insertThisPost = true;
                  post.url = GenerateFriendlyUrl(post);
              }
          }

          if(insertThisPost)
              result.push(post);

      });

      return result;
  },

  /*
   * Get posts
   */
  getPosts: function(posts, search){
      var result = [];
      posts.forEach(function(post){
          post.url = GenerateFriendlyUrl(post);
          result.push(post);
      });
      return result;
  },

  /*
   * Get categories list from posts
   */
  getCategories: function(posts){
      var categories = [];
      posts.forEach(function(post){
          for(var i = 0; i < post.categories.length; i++){

              if(categories.indexOf(post.categories[i]) === -1){
                  categories = categories.concat(post.categories[i]);
              }
          }
      });
      return categories;
  },

  /*
   * Get page by given title
   */
  getPageByTitle: function(pages, title){
      var p = {};
      pages.forEach(function(page){
          page.url = GenerateFriendlyUrl(page);

          if(title === page.url){
              p = page;
              return false;
          }

      });
      return p;
  }

}


/*
 * Remove acentuation
 */
function EncodeString(s){
    var r = s.toString().toLowerCase();
    non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (var i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r.toLowerCase();
}

/*
 * Generate a friendly url to post based on title
 */
function GenerateFriendlyUrl(post){
    return post.title.replace(/ /g,"-").toLowerCase();
}

/*
 * Get posts by given json posts and category
 */
function GetPostsByCategory(posts, category){

    var result = [];

    posts.forEach(function(post){

        post.url = GenerateFriendlyUrl(post);

        for(var i = 0; i < post.categories.length; i++){
            if(category === post.categories[i]){
                result.push(post);
            }
        }

    });

  return result;
}

/*
 * Get posts by given json posts and id
 */
function GetPostById(posts, id){
    posts.forEach(function(post){
        post.url = GenerateFriendlyUrl(post);
    });
    return posts[id-1];
}

/*
 * Get posts by given json posts and search
 */
function GetPostsBySearch(posts, search){

    search = EncodeString(search);
    var result = [];

    posts.forEach(function(post){
        var insertThisPost = false;

        var value;
        for(var attr in post){
            value = EncodeString(post[attr]);

            if(value.indexOf(search) != -1){
                insertThisPost = true;
                post.url = GenerateFriendlyUrl(post);
            }
        }

        if(insertThisPost)
            result.push(post);

    });

    return result;
}

/*
 * Get posts
 */
function GetPosts(posts, search){
    var result = [];
    posts.forEach(function(post){
        post.url = GenerateFriendlyUrl(post);
        result.push(post);
    });
    return result;
}

/*
 * Get categories list from posts
 */
function GetCategories(posts){
    var categories = [];
    posts.forEach(function(post){
        for(var i = 0; i < post.categories.length; i++){

            if(categories.indexOf(post.categories[i]) === -1){
                categories = categories.concat(post.categories[i]);
            }
        }
    });
    return categories;
}

/*
 * Get page by given title
 */
function GetPageByTitle(pages, title){
    var p = {};
    pages.forEach(function(page){
        page.url = GenerateFriendlyUrl(page);

        if(title === page.url){
            p = page;
            return false;
        }

    });
    return p;
}
