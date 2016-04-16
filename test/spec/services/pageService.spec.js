
describe("[Page Service]", function() {
	var pageService,
		$httpBackend,
		expectedPages;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_PageService_, _$httpBackend_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		pageService = _PageService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

		expectedPages = [
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

		$httpBackend
			.expectGET('content/pages/pages.json')
			.respond(expectedPages);

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

	afterEach(function(){
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	});

    it("Should list get a page by id", function(done) {

		expectedPage ={
		        "id": "1",
		        "title": "About",
				"slug":"about",
				"url":"#page/1/about",
		        "author":"Rondy Mesquita",
		        "date":"January 28, 2015",
		        "type":"md"
		    };

		pageService.getById('1',function(page){
	        expect(expectedPage).toEqual(page);
			done();
	    });

		$httpBackend.flush();

    });

});
