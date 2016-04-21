describe("FunctionsTest", function() {
	var phoenixFunctions;
    beforeEach(function() {
        phoenixFunctions = new PhoenixFunctions();
     });

    it("Should encode string", function() {
        expect(phoenixFunctions.sanitize("àáâãäå")).toEqual("aaaaaa");
		expect(phoenixFunctions.sanitize("æ")).toEqual("ae");
		expect(phoenixFunctions.sanitize("ç")).toEqual("c");
		expect(phoenixFunctions.sanitize("èéêë")).toEqual("eeee");
		expect(phoenixFunctions.sanitize("ìíîï")).toEqual("iiii");
		expect(phoenixFunctions.sanitize("ñ")).toEqual("n");
		expect(phoenixFunctions.sanitize("òóôõö")).toEqual("ooooo");
		expect(phoenixFunctions.sanitize("œ")).toEqual("oe");
		expect(phoenixFunctions.sanitize("ùúûűü")).toEqual("uuuuu");
		expect(phoenixFunctions.sanitize("ýÿ")).toEqual("yy");
		expect(phoenixFunctions.sanitize("atenção")).toEqual("atencao");
		expect(phoenixFunctions.sanitize("áéíóú")).toEqual("aeiou");
    });

	it("Should generate friendly url based on post title", function() {
        var post = {title: 'A simple post title'};
		var expectedSlug = "a-simple-post-title";
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);
    });

	it("Should generate friendly url based on post title with accentuation and pontuation", function() {
        var post = {title: 'Atenção, Esse Post é Importante'};
		var expectedSlug = "atencao-esse-post-e-importante";
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);
    });

	it("Should generate friendly url based on post title with pontuation at start and end", function() {
        var post = {title: '!?Atenção, Esse Post é Importante!?'};
		var expectedSlug = "atencao-esse-post-e-importante";
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);
    });

});
