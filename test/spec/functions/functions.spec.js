describe("FunctionsTest", function() {
	var phoenixFunctions;
    beforeEach(function() {
        phoenixFunctions = new PhoenixFunctions();
     });

    it("Should encode string", function() {
        expect(phoenixFunctions.encodeString("àáâãäå")).toEqual("aaaaaa");
		expect(phoenixFunctions.encodeString("æ")).toEqual("ae");
		expect(phoenixFunctions.encodeString("ç")).toEqual("c");
		expect(phoenixFunctions.encodeString("èéêë")).toEqual("eeee");
		expect(phoenixFunctions.encodeString("ìíîï")).toEqual("iiii");
		expect(phoenixFunctions.encodeString("ñ")).toEqual("n");
		expect(phoenixFunctions.encodeString("òóôõö")).toEqual("ooooo");
		expect(phoenixFunctions.encodeString("œ")).toEqual("oe");
		expect(phoenixFunctions.encodeString("ùúûűü")).toEqual("uuuuu");
		expect(phoenixFunctions.encodeString("ýÿ")).toEqual("yy");
		expect(phoenixFunctions.encodeString("atenção")).toEqual("atencao");
		expect(phoenixFunctions.encodeString("áéíóú")).toEqual("aeiou");
    });

	it("Should generate friendly url based on post title", function() {
        var post = {title: 'A simple post title'};
		var expectedSlug = "a-simple-post-title"
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);
    });

	it("Should generate friendly url based on post title with accentuation and pontuation", function() {
        var post = {title: 'Atenção, Esse Post é Importante'};
		var expectedSlug = "atencao-esse-post-e-importante"
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);

    });

	it("Should generate friendly url based on post title with pontuation at start and end", function() {
        var post = {title: '!?Atenção, Esse Post é Importante!?'};
		var expectedSlug = "atencao-esse-post-e-importante"
		var slug = phoenixFunctions.generateFriendlyUrlToPost(post).slug;
		expect(expectedSlug).toEqual(slug);
    });

});
