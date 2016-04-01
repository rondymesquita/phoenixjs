function PhoenixFunctions(){
    //var self = this;
}
PhoenixFunctions.prototype = {
    /*
     * Remove acentuation
     */
    encodeString: function(s){
        var r = s.toString().toLowerCase();
        non_asciis = [
            {value: 'a',regExp: '[àáâãäå]'},
            {value: 'ae',regExp: 'æ'},
            {value: 'c',regExp: 'ç'},
            {value: 'e',regExp: '[èéêë]'},
            {value: 'i',regExp: '[ìíîï]'},
            {value: 'n',regExp: 'ñ'},
            {value: 'o',regExp: '[òóôõö]'},
            {value: 'oe',regExp: 'œ'},
            {value: 'u',regExp: '[ùúûűü]'},
            {value: 'y',regExp: '[ýÿ]'},
            {value: '-',regExp: '[^A-Za-z0-9]+'}, //all special chars
            {value: '',regExp: '^[^A-Za-z0-9]+'}, //special chars at start
            {value: '',regExp: '[^A-Za-z0-9]+$'} //special chars at end
        ];
        non_asciis.forEach(function(char){
            r = r.replace(new RegExp(char.regExp, 'g'), char.value);
        });

        return r.toLowerCase();
    },

    /*
     * Generate a friendly url to post based on title
     */
    generateFriendlyUrl: function(post){
        post.slug = this.encodeString(post.title);
        return post;
    },

    /*
     * Get posts by given json posts and category
     */
    getPostsByCategory: function(posts, category){
        var result = [],
            self = this;

        posts.forEach(function(post){

            post = self.generateFriendlyUrl(post);

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
      var self = this;
      posts.forEach(function(post){
          post = self.generateFriendlyUrl(post);
      });
      return posts[id-1];
  },

  /*
   * Get posts by given json posts and search
   */
  getPostsBySearch: function(posts, search){

      search = this.encodeString(search);
      var result = [],
          self = this;

      posts.forEach(function(post){
          var insertThisPost = false;

          var value;
          for(var attr in post){
              value = self.encodeString(post[attr]);

              if(value.indexOf(search) != -1){
                  insertThisPost = true;
                  post.url = self.generateFriendlyUrl(post);
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
      var result = [],
          self = this;

      posts.forEach(function(post){
          post = self.generateFriendlyUrl(post);
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
      var p = {},
          self = this;
      pages.forEach(function(page){
          post = self.generateFriendlyUrl(page);

          if(title === page.slug){
              p = page;
              return false;
          }

      });
      return p;
  }

}
