jasmine.DEFAULT_TIMEOUT_INTERVAL = 2 * 100;

//create a console.log reporter
// var MyReporter = function(){jasmineRequire.JsApiReporter.apply(this,arguments);};
// MyReporter.prototype = jasmineRequire.JsApiReporter.prototype;
// MyReporter.prototype.constructor = MyReporter;
// MyReporter.prototype.specDone=function(o){
//     o=o||{};
//     if(o.status!=="passed"){
//       //console.warn("Failed: " + o.fullName + " " + o.failedExpectations[0].message);
//     }
// };
// var env = jasmine.getEnv();
// env.addReporter(new MyReporter());

var categories = [{title: "star-wars", url: "#/category/star-wars"}, {title: "the-empire-strikes-back", url: "#/category/the-empire-strikes-back"}, {title: "movies", url: "#/category/movies"}, {title: "a-new-hope", url: "#/category/a-new-hope"}, {title: "the-clone-wars", url: "#/category/the-clone-wars"}, {title: "animation", url: "#/category/animation"}];

var menu = [{"title":"Home","url":"#/"},{"title":"About","url":"#/page/1/about"}];

var pages = [
    {
        "id": "1",
        "title": "About",
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    },
    {
        "id": "2",
        "title": "The PhoenixJS",
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    },
    {
        "id": "3",
        "title": "The theme",
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    },
    {
        "id": "4",
        "title": "Contact",
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    }

];

var posts = [
    {
        "id": "1",
        "title": "The Empire Strikes Back",
        "slug":"the-empire-strikes-back",
        "url": "#post/1/the-empire-strikes-back",
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
    },
    {
        "id": "2",
        "title": "A New Hope",
        "slug":"a-new-hope",
        "url": "#post/2/a-new-hope",
        "excerpt": "Look, I ain't in this for your revolution, and I'm not in it for you, Princess. I expect to be well paid. I'm in it for the money. I care. So, what do you think of her, Han? He is here. What?! I find your lack of faith disturbing. You are a part of the Rebel Alliance and a traitor! Take her away!",
        "image":"content/posts/images/starwars_a_new_hope.jpg",
        "categories": [
            "star-wars", "a-new-hope","movies"
        ],
        "tags":[
            "turpis","basvitaeic"
        ],
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"md"
    },
    {
        "id": "3",
        "title": "The Clone Wars",
        "slug":"the-clone-wars",
        "url":"#post/3/the-clone-wars",
        "excerpt": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Oh God, my uncle. How am I ever gonna explain this? Dantooine. They're on Dantooine. I call it luck.",
        "image":"content/posts/images/starwars_the_clone_wars.jpg",
        "categories": [
            "star-wars", "the-clone-wars","animation"
        ],
        "tags":[
            "turpis","basvitaeic"
        ],
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"html"
    }
];
