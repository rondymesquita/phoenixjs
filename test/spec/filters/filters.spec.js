describe("FiltersTest", function() {

	var byCategoryFilter;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function($filter){
		byCategoryFilter = $filter('byCategory');
	}));

	it("Should list post by category using filter", function() {

		var expectedPostsFromCategory = [{
	        "id": "3",
	        "title": "The Clone Wars",
	        "slug":"the-clone-wars",
			"url": "#post/3/the-clone-wars",
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
	    }];

		expect(byCategoryFilter(posts, 'animation')).toEqual(expectedPostsFromCategory);
    });

	it("Should list all posts by another category", function() {

		var expectedPostsFromCategory = [{
	        "id": "1",
	        "title": "The Empire Strikes Back",
	        "slug":"the-empire-strikes-back",
			"url":"#post/1/the-empire-strikes-back",
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
			"url":"#post/2/a-new-hope",
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
	    }];

		expect(byCategoryFilter(posts, 'movies')).toEqual(expectedPostsFromCategory);

    });

});
