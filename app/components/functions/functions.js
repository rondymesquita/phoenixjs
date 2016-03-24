
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

    $.each(posts, function(index, value){

        posts[index].url = GenerateFriendlyUrl(posts[index]);

        for(var i = 0; i < posts[index].categories.length; i++){
            if(category === posts[index].categories[i]){
                result.push(posts[index]);
            }
        }

    });

  return result;
}

/*
 * Get posts by given json posts and id
 */
function GetPostById(posts, id){
    $.each(posts, function(index, value){
        posts[index].url = GenerateFriendlyUrl(posts[index]);
    });
    return posts[id-1];
}

/*
 * Get posts by given json posts and search
 */
function GetPostsBySearch(posts, search){

    search = EncodeString(search);
    var result = [];

    $.each(posts, function(index, value){
        var insertThisPost = false;

        /*Each post attribute*/
        $.each(posts[index], function(jndex, value){
            value = EncodeString(value);

            if(value.indexOf(search) != -1){
                insertThisPost = true;
                posts[index].url = GenerateFriendlyUrl(posts[index]);
            }
        });

        if(insertThisPost)
            result.push(posts[index]);

    });

    return result;
}

/*
 * Get posts
 */
function GetPosts(posts, search){
    var result = [];
    $.each(posts, function(index, value){
        posts[index].url = GenerateFriendlyUrl(posts[index]);
        result.push(posts[index]);
    });
    return result;
}

/*
 * Get categories list from posts
 */
function GetCategories(posts){
    var categories = [];
    $.each(posts, function(index, value){
        /*get post categories*/
        for(var i = 0; i < posts[index].categories.length; i++){

            if($.inArray(posts[index].categories[i], categories) == -1){
                categories = categories.concat(posts[index].categories[i]);
            }
        }
    });
    return categories;
}

/*
 * Get page by given title
 */
function GetPageByTitle(pages, title){
    var page = {};
    $.each(pages, function(index, value){
        pages[index].url = GenerateFriendlyUrl(pages[index]);

        if(title === pages[index].url){
            page = pages[index];
            return false;
        }

    });
    return page;
}
