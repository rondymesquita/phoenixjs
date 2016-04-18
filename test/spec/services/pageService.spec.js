describe("PageServiceTest", function() {
	var pageService,
		$httpBackend;

	beforeEach(function(){
		module('PhoenixJS');
	});

	beforeEach(inject(function(_PageService_, _$httpBackend_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		pageService = _PageService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;

		$httpBackend
			.expectGET('content/pages/pages.json')
			.respond(pages);

		$httpBackend
			.expectGET(/themes/)
			.respond();

	}));

    it("Should get a page by id", function(done) {

		expectedPage ={
	        "id": "1",
	        "title": "About",
			"slug":"about",
			"url":"#page/1/about",
	        "author":"Rondy Mesquita",
	        "date":"January 28, 2015",
	        "type":"md"
	    };

		// console.log(pageService.getById().then());
		pageService.getById('1').then(function(page){
	        expect(expectedPage).toEqual(page);
			done();
	    });

		$httpBackend.flush();

    });

});
