# PhoenixJS

[Preview here!](http://rondymesquita.github.io/#/)

## Proposal
- Create an CMS free of server languages, using technologies like javascript, HTML, CSS and Markdown.
- Build on top of AngularJS, you can create your posts using markdown language.
- Create templates using HTML and CSS.
- Extend with AngularJS
- Create your own themes

##Requirements
- Bower
- Dependencies declared in bower.json

##Build
 - Install NodeJS
 - Install npm
 - Install Bower
 - Enter in Phoenixjs folder and execute:

    ```
    bower install
    ```

##Theme sctructure
- Put themes in **app/themes** folder following the structure
    - [THEME-NAME]
        - --- **comments** (directive view for comments)
            - --- **comments.html** (default view for comments)
        - --- **footer** (directive view for footer)
            - --- **footer.html** (default view for footer)
        - --- **header** (directive view for header)
            - --- **header.html** (default view for header)
        - --- **posts** (contains the views for any PostController)
            - --- **view.html** (view the post)
            - --- **list.html** (list all posts)
            - --- **byCategory.html** (list posts by category)
            - --- **bySearch.html** (lists posts based on search/search result)
        - --- **sidebar** (directive for sidebars)
            - --- **sidebar.html** (view for sidebars)

##Structure
The structure is simple:

 - **app**
     - **index.html** (the root file)
     - **app.module.js**  (the core of phoenix js) (Module configuration)
     - **app.routes.js** (All routes used in phoenix)
     - **config.js** (The configurations of your site. You can customize some attributes)
     - **controllers** (folder containing controllers)
      - **directives** (folder containing directives)
      - **filters** (folder containing filters)
      - **functions** (folder containing common functions)
      - **services** (folder containing services)
      - **themes** (where the themes are installed)

You don't need to worry about controllers, directives, filters, functions and services. They are ready to work for you. You just need create your content folder, put the content inside, choose (or create) your theme and you site is ready.
Of course, feel free to change any file and customize your experience.
The **index.html** is the root file where all dependencies are linked. So, you can add any css or js file to your site.

##Content
The content is based on a json file that works like a index for posts meta and markdown and html file for post content. So, you don't need any database.

You create a folder **content** sibling **app** folder like.

 - **app**
 - **content**
     - **menus** (menus)
     - **pages** (pages)
         - **example.md**
         - **pages.json**
     - **posts** (posts)
         - **1.md** (a markdown post)
         - **2.html** (a html post)
         - **posts.json** (post index)
         - **images** (the images folder of posts)

###Posts.json

This is an example of **posts.json** file. Is an array with all posts.

```
    [{
        "id": "1",
        "title": "The Empire Strikes Back",
        "excerpt": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. Remember, a Jedi can feel the Force flowing through him. Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid.",
        "image":"content/posts/images/starwars_the_empire_strikes_back.jpg",
        "categories": [
            "star-wars", "the-empire-strikes-back","movies"
        ],
        "tags":[
            "lorem","ipsum"
        ],
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    }
    ,
    ...]
```
**id**: the id of post
**title**: the title of post
**excerpt**: the excerpt of post. Is displayed on list and seach result
**image**:  the featured image of post
**categories**: an array of categories of post
**author**: name of author
**date**: date
**type**: type of your posts. You can choose "**md**" or "**html**"

###Post file
To your post file, your take the **id** of your post and the **type**: **[id].[type]**

 - 1.md
 - 2.html

##Config.js file
The **config.js** is a constant angularjs file where the configuration attributes are declared.
```
    siteName: 'PhoenixJS',
    siteDescription: 'Simple CMS AngularJS Based',
    theme: 'rising',
    intenseDebateAcct: '4fb72a3cc0a3dd8ee583e406d41ddafe',
    pagTemplate: 'bower_components/angular-utils-pagination/dirPagination.tpl.html',
    pagItemsPerPage: 2,
```
**siteName**: the site name
**siteDescription**: description
**theme**: the folder name of theme
**intenseDebateAcct**: the id of IntenseDebate to add comments to posts
**pagTemplate**: the template of pagination
**pagItemsPerPage**: how many posts are displayed per page on pagination

##Pagination
To add pagination support was used the directive **pagination** from
[https://github.com/michaelbromley/angularUtils](https://github.com/michaelbromley/angularUtils). You can customize the directive reading the doc.

## Working on features
- √ Support both HTML and Markdown posts
- √ Search posts
-   Use Grunt
- √ Menu support
- √ Comments System
-   Add loading when changing page
- √ Add post pagination

## Known issues
- √ Search is not case insensitive (should be)


