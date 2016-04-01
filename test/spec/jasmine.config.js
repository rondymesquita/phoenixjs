jasmine.DEFAULT_TIMEOUT_INTERVAL = 2 * 1000;

expectedCategories = ["star-wars", "the-empire-strikes-back", "movies", "a-new-hope", "the-clone-wars"];
expectedPosts = [
    {
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
    {
        "id": "2",
        "title": "A New Hope",
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
        "excerpt": "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force. All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Oh God, my uncle. How am I ever gonna explain this? Dantooine. They're on Dantooine. I call it luck.",
        "image":"content/posts/images/starwars_the_clone_wars.jpg",
        "categories": [
            "star-wars", "the-clone-wars","movies"
        ],
        "tags":[
            "turpis","basvitaeic"
        ],
        "author":"Rondy Mesquita",
        "date":"January 28, 2015",
        "type":"html"
    }
];

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
