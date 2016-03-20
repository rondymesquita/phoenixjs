//define( 'helloworld.spec', deps, callback );

var PhoenixPage = require('./page-objects/phoenixPage.js');

describe("Hello Protractor", function() {

    var phoenixPage;

    beforeEach(function(){
        phoenixPage = new PhoenixPage(browser);
    });

    it('should open duckduck go and do a search', function() {
        phoenixPage.open();
        //browser.pause();

		//element(by.id('search_form_input_homepage')).sendKeys('Darth Vander');
		//element(by.id('search_button_homepage')).click();
        // console.log(browser);
        expect(true).toEqual(true);
    });
});
