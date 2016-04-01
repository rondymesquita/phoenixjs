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
		var expectedTitle = "a-simple-post-title"

		expect(expectedTitle).toEqual(phoenixFunctions.generateFriendlyUrl(post));
    });

	it("Should generate friendly url based on post title with accentuation", function() {
        var post = {title: 'Atenção, Esse Post é Importante!'};
		var expectedTitle = "atencao-esse-post-e-importante"

		expect(expectedTitle).toEqual(phoenixFunctions.generateFriendlyUrl(post));
    });

});
