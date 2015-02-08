# PhoenixJS

## Proposal
- Create an CMS free of server languages, using technologies like javascript, HTML, CSS and Markdown.
- Build on top of AngularJS, you can create your posts using markdown language.
- Create templates using HTML and CSS.
- Extend with AngularJS
- Create your own themes

## Requirements
- Bower
- Dependencies declared in bower.json

## Basic
- Put themes in **app/themes** folder following the structure
    - [THEME]
        - --- footer
            - --- footer.html
        - --- header
            - --- header.html
        - --- posts
            - --- view.html (view the post)
            - --- list.html (list all posts)
            - --- byCategory.html (list posts by category)
            - --- bySearch.html (lists posts based on search)
        - --- sidebar
            - --- sidebar.html



**This structure may change in the near future :)**

## Working on features
- Support both HTML and Markdown posts
- Search posts
- Use Grunt
- Menu support
- Comments System
- Friendly Url
